using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AuctorAPI.Models;

namespace AuctorAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentsController : ControllerBase
    {
        private readonly AuctorAPIContext _context;

        public PaymentsController(AuctorAPIContext context)
        {
            _context = context;
        }

        // GET: api/Payments
        [HttpGet]
        public IEnumerable<Payment> GetPayment()
        {
            return _context.Payment.Include(s => s.Subscription).Include(c => c.Client).ThenInclude(p => p.Contracts).OrderBy(s=> s.Id);
        }


        // GET: api/Payments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        {
            var payment = await _context.Payment.FindAsync(id);
        

            if (payment == null)
            {
                return NotFound();
            }

            return payment;
        }

        // PUT: api/Payments/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPayment(int id, Payment payment)
        {
            if (id != payment.Id)
            {
                return BadRequest();
            }



            _context.Entry(payment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PaymentExists(id))
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

        // POST: api/Payments
        [HttpPost]
        public async Task<ActionResult<Payment>> PostPayment(Payment payment)
        {
             
            _context.Payment.Add(payment);

            if (payment.PaymentRegistered == null)
            {
                payment.PaymentRegistered = DateTime.Now;
            }

        


            var clientToUpdate = _context.Client.Find(payment.ClientId);
            var subscriptionIntended = _context.Subscription.Find(payment.SubscriptionId);

            if (payment.CashRegistered == 0 || payment.CashRegistered == null)
                payment.CashRegistered = subscriptionIntended.Price;


            if (payment.SubscriptionId!= null)
            {
                var subscription = _context.Subscription.Find(payment.SubscriptionId);
                clientToUpdate.SubscriptionId = payment.SubscriptionId; 
                clientToUpdate.GymEntriesLeft = subscription.GymEntries;
                clientToUpdate.MartialArtsEntriesLeft = subscription.MartialArtsEntries;

                DateTime wygasniecie = new DateTime();

                wygasniecie = payment.SubscriptionExpires.Value;

                wygasniecie = wygasniecie.AddDays(1);

                clientToUpdate.SubscriptionExpires = wygasniecie;

                if(payment.CashRegistered >= subscription.Price)
                {
                    payment.PaymentCompleted = true;
                }
                else if (payment.CashRegistered < subscription.Price)
                {
                    payment.PaymentCompleted = false;
                }

            }


            
                if (clientToUpdate.MartialArtsEntries == null && clientToUpdate.GymEntries == null)
                {
                    clientToUpdate.MartialArtsEntries = clientToUpdate.GymEntries = 0;
                }

           


                await _context.SaveChangesAsync();

            return CreatedAtAction("GetPayment", new { id = payment.Id }, payment);
        }

        // DELETE: api/Payments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Payment>> DeletePayment(int id)
        {
            var payment = await _context.Payment.FindAsync(id);
            if (payment == null)
            {
                return NotFound();
            }

            _context.Payment.Remove(payment);
            await _context.SaveChangesAsync();

            return payment;
        }

        private bool PaymentExists(int id)
        {
            return _context.Payment.Any(e => e.Id == id);
        }
    }
}
