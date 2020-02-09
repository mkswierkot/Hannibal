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
    public class TrainingSchedulesController : ControllerBase
    {
        private readonly AuctorAPIContext _context;

        public TrainingSchedulesController(AuctorAPIContext context)
        {
            _context = context;
        }

        // GET: api/TrainingSchedules
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<TrainingSchedule>>> GetTrainingSchedule()
        //{
        //    return await _context.TrainingSchedule.ToListAsync();
        //}

        [HttpGet]
        public IEnumerable<TrainingSchedule> GetTrainingSchedule()
        {
            return _context.TrainingSchedule.Include(s => s.Training).OrderBy(s =>s.HourStarts);
        }

        // GET: api/TrainingSchedules/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingSchedule>> GetTrainingSchedule(int id)
        {
            var trainingSchedule = await _context.TrainingSchedule.FindAsync(id);

            if (trainingSchedule == null)
            {
                return NotFound();
            }

            return trainingSchedule;
        }

        // PUT: api/TrainingSchedules/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainingSchedule(int id, TrainingSchedule trainingSchedule)
        {
            if (id != trainingSchedule.Id)
            {
                return BadRequest();
            }

            _context.Entry(trainingSchedule).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingScheduleExists(id))
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

        // POST: api/TrainingSchedules
        [HttpPost]
        public async Task<ActionResult<TrainingSchedule>> PostTrainingSchedule(TrainingSchedule trainingSchedule)
        {
            _context.TrainingSchedule.Add(trainingSchedule);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainingSchedule", new { id = trainingSchedule.Id }, trainingSchedule);
        }

        // DELETE: api/TrainingSchedules/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrainingSchedule>> DeleteTrainingSchedule(int id)
        {
            var trainingSchedule = await _context.TrainingSchedule.FindAsync(id);
            if (trainingSchedule == null)
            {
                return NotFound();
            }

            _context.TrainingSchedule.Remove(trainingSchedule);
            await _context.SaveChangesAsync();

            return trainingSchedule;
        }

        private bool TrainingScheduleExists(int id)
        {
            return _context.TrainingSchedule.Any(e => e.Id == id);
        }
    }
}
