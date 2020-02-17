using CoffeeproofBullet.Data.Model;
using CoffeeproofBullet.Libraries;
using CoffeeproofBullet.Model;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly IGenericRepository<Client> repository;


        public ClientsController(IGenericRepository<Client> repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public IEnumerable<Client> GetClients()
        {
            return repository.GetAllEntities(null);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Client>> GetClient(int id)
        { 
            return await repository.GetEntity(id,  c=>c.Payments, c=>c.Subscription); 
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Client>> PutClient(int id, [FromBody]Client client)
        {
            await repository.UpdateEntity(id, client);
            return client;
        }
        [HttpPost]
        public async Task<ActionResult<Client>> PostClient([FromBody]Client client)
        {
            await repository.CreateEntity(client);
            return client;
        }
    }
}