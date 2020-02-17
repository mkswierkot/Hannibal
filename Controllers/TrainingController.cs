using System.Collections.Generic;
using System.Threading.Tasks;
using CoffeeproofBullet.Data.Model;
using CoffeeproofBullet.Libraries;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeproofBullet.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class TrainingController : Controller
    {
        private readonly IGenericRepository<Training> repository;

        public TrainingController(IGenericRepository<Training> repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<Training> GetTrainings()
        {
            return repository.GetAllEntities(c=>c.FacilityType);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Training>> GetTraining(int id)
        {
            return await repository.GetEntity(id, en => en.FacilityType);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<Training>> PutTraining(int id, [FromBody]Training training)
        {
            await repository.UpdateEntity(id, training);
            return training;
        }
        [HttpPost]
        public async Task<ActionResult<Training>> PostTraining([FromBody]Training training)
        {
            await repository.CreateEntity(training);
            return training;
        }
    }
}