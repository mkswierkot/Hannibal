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
    public class FacilityTypeController : ControllerBase
    {
        private readonly IGenericRepository<FacilityType> repository;

        public FacilityTypeController(IGenericRepository<FacilityType> repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public IEnumerable<FacilityType> GetFacilityTypes()
        {
            return repository.GetAllEntities(null);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<FacilityType>> GetFacilityType(int id)
        {
             return await repository.GetEntity(id, null);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<FacilityType>> PutFacilityType(int id, [FromBody]FacilityType facilityType)
        {
            await repository.UpdateEntity(1, facilityType);
            return facilityType;
        }
        [HttpPost]
        public async Task<ActionResult<FacilityType>> PostFacilityType([FromBody]FacilityType facilityType)
        { 
            await repository.CreateEntity(facilityType);
            return facilityType;
        } 

    }
}