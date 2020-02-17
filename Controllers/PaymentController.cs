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
    public class PaymentController : ControllerBase
    {
        private readonly IGenericRepository<Payment> repository;


        public PaymentController(IGenericRepository<Payment> repository)
        {
            this.repository = repository;
        }
        [HttpGet]
        public IEnumerable<Payment> GetPayment()
        {
            return repository.GetAllEntities(null);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Payment>> GetPayment(int id)
        { 
            return await repository.GetEntity(id,  c=>c.Subscription); 
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Payment>> PutPayment(int id, [FromBody]Payment Payment)
        {
            await repository.UpdateEntity(id, Payment);
            return Payment;
        }
        [HttpPost]
        public async Task<ActionResult<Payment>> PostPayment([FromBody]Payment Payment)
        {
            await repository.CreateEntity(Payment);
            return Payment;
        }
    }
}