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
    public class SubscriptionController : ControllerBase
    {
        private readonly IGenericRepository<Subscription> repository;

        public SubscriptionController(IGenericRepository<Subscription> repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<Subscription> GetSubscriptions()
        {
            return repository.GetAllEntities(en => en.SubscriptionElements);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Subscription>> GetSubscription(int id)
        {
             return await repository.GetEntity(id, en=>en.SubscriptionElements);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Subscription>> PutSubscription(int id, [FromBody]Subscription subscription)
        {
            await repository.UpdateEntity(id, subscription);
            return subscription;
        }
        [HttpPost]
        public async Task<ActionResult<Subscription>> PostSubscription([FromBody]Subscription subscription)
        { 
            await repository.CreateEntity(subscription);
            return subscription;
        } 

    }
}