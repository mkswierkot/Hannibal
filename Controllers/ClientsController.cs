using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AuctorAPI.Models;
using System.Web.Http;
using HttpPutAttribute = Microsoft.AspNetCore.Mvc.HttpPutAttribute;
using HttpGetAttribute = Microsoft.AspNetCore.Mvc.HttpGetAttribute;
using HttpPostAttribute = Microsoft.AspNetCore.Mvc.HttpPostAttribute;
using HttpDeleteAttribute = Microsoft.AspNetCore.Mvc.HttpDeleteAttribute;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;
using Microsoft.AspNetCore.Cors;

namespace AuctorAPI.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly AuctorAPIContext _context;

        public ClientsController(AuctorAPIContext context)
        {
            _context = context;
        }

        // GET: api/Clients
        
        [HttpGet]
        public  IEnumerable<Client> GetClients()
        {

            var clients =  _context.Client.Where(s => s.IsDeleted != true).Include(s => s.Subscription).Include(s => s.Contracts);


            Dictionary<DateTime, int> test = GetClientsAmountStatistic(DateTime.Parse("2019-11-05"), DateTime.Parse("2019-11-12"));
            test = GetClientsAmountStatistic(DateTime.Parse("2019-10-01"), DateTime.Parse("2019-12-12"));
            test = GetClientsAmountStatistic(DateTime.Parse("2017-11-05"), DateTime.Parse("2019-11-12")); 

            return clients;
        }
    
        // GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        {
            var client = await _context.Client.FindAsync(id);
            var subscription = await _context.Subscription.FindAsync(client.SubscriptionId); 
            var payments = await _context.Payment.Where(p => p.ClientId == id).Include(p=>p.Subscription).ToListAsync();
            var contracts = await _context.Contract.Where(p => p.ClientId == id).Include(p=>p.Group).ToListAsync();
              
            client.Subscription = subscription;
            client.Payments = payments;
            client.Contracts = contracts;
         

            if (client == null)
            {
                return NotFound();
            }
            if (client.IsDeleted == true)
            {
                return NotFound();
            }

            return client;
        }

        // PUT: api/Clients/5
       
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(int id, [FromBody]Client client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }

            _context.Entry(client).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clients
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
 
            client.IsDeleted = false;

            if (client.MartialArtsEntries == null && client.GymEntries == null)
            {
                client.MartialArtsEntries = client.GymEntries = 0;
            }
            _context.Client.Add(client);

          
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClient", new { id = client.Id }, client);
        }
        
        [HttpDelete("{id}")]
        public async Task<ActionResult<Client>> DeleteClient(int id)
        {
            var client = await _context.Client.FindAsync(id);
            if (client == null)
            {
                return NotFound();
            }

            client.IsDeleted = true;
            await _context.SaveChangesAsync();

            return client;
        }
        // PUT: api/Clients/5
        
        [Route("api/clients/amount/{start}/{end}")]
        public Dictionary<DateTime, int> GetClientsAmountStatistic(DateTime start , DateTime end)
        {
            Dictionary<DateTime,int> amountOfEntries = new Dictionary<DateTime, int>();
            int dayDifference = Convert.ToInt32((end - start).TotalDays);

            TimeSpan startTs = new TimeSpan(0, 0, 0);
            TimeSpan endTs = new TimeSpan(23, 59, 0);


            DateTime helperDateStart = new DateTime();
            DateTime helperDateFinish = new DateTime();

            int mnoznik = 1;

            if (dayDifference >= 30 && dayDifference <= 62)
                mnoznik = 7;
            else if (dayDifference > 62 && dayDifference <= 365)
                mnoznik = 31;
            else if (dayDifference > 730)
                mnoznik = 365;

            for(int i = 0; i <= dayDifference; i++)
            {
                i *= mnoznik;
                helperDateStart = start.AddDays(i);
                helperDateFinish = start.AddDays(i);

                helperDateStart = helperDateStart + startTs;
                helperDateFinish = helperDateFinish + endTs;
                
                var trainingEntries = _context.TrainingEntry.Where(t => t.EntryRegistered >= helperDateStart && t.EntryRegistered <= helperDateFinish).Select(t=>t.Client).Distinct().Count();
                amountOfEntries.Add(helperDateFinish,trainingEntries);
             
            }

            return amountOfEntries;
             
        }

        private bool ClientExists(int id)
        {
            return _context.Client.Any(e => e.Id == id);
        }
    }
}
