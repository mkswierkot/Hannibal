using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoffeeproofBullet.Concrete;
using CoffeeproofBullet.Data.Model;
using CoffeeproofBullet.Libraries;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeproofBullet.Controllers
{ 
       [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class SubscriptionElementController : ControllerBase
    {
        private readonly IGenericRepository<SubscriptionElement> repository;

        public SubscriptionElementController(IGenericRepository<SubscriptionElement> repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<SubscriptionElement> GetSubscriptionElements()
        {
            return repository.GetAllEntities(null);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<SubscriptionElement>> GetSubscriptionElement(int id)
        {
             return await repository.GetEntity(id, en => en.Subscription);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<SubscriptionElement>> PutSubscriptionElement(int id, [FromBody]SubscriptionElement SubscriptionElement)
        {
            await repository.UpdateEntity(1, SubscriptionElement);
            return SubscriptionElement;
        }
        [HttpPost]
        public async Task<ActionResult<SubscriptionElement>> PostSubscriptionElement([FromBody]SubscriptionElement SubscriptionElement)
        { 
            await repository.CreateEntity(SubscriptionElement);
            return SubscriptionElement;
        } 

    }
}