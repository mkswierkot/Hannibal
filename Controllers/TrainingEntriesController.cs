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
    public class TrainingEntriesController : ControllerBase
    {
        private readonly AuctorAPIContext _context;

        public TrainingEntriesController(AuctorAPIContext context)
        {
            _context = context;
        }

        // GET: api/TrainingEntries
        [HttpGet]
        public IEnumerable<TrainingEntry> GetTrainingEntry()
        {
            return _context.TrainingEntry.Include(t => t.Training).Include(c => c.Client);
        }

       
        // GET: api/TrainingEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TrainingEntry>> GetTrainingEntry(int id)
        {
            var trainingEntry = await _context.TrainingEntry.FindAsync(id);

            if (trainingEntry == null)
            {
                return NotFound();
            }

            return trainingEntry;
        }

        // PUT: api/TrainingEntries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTrainingEntry(int id, TrainingEntry trainingEntry)
        {
            if (id != trainingEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(trainingEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TrainingEntryExists(id))
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

        // POST: api/TrainingEntries
        [HttpPost]
        public async Task<ActionResult<TrainingEntry>> PostTrainingEntry(TrainingEntry trainingEntry)
        {
            _context.TrainingEntry.Add(trainingEntry);

            if(trainingEntry.EntryRegistered == null)
            {
                trainingEntry.EntryRegistered = DateTime.Now;
            }
            
            if(trainingEntry.FreeEntry == null)
            {
                trainingEntry.FreeEntry = false;
            }

            var clientToUpdate = _context.Client.Find(trainingEntry.ClientId);
            var training = _context.Training.Find(trainingEntry.TrainingId);

            if(trainingEntry.Training.Type=="SIŁOWNIA")                                                                 // If user enters gym...
            {

                if (clientToUpdate.GymEntriesLeft >= 999)
                {
                    clientToUpdate.GymEntriesLeft++;
                }
                if (clientToUpdate.GymEntriesLeft > 0)                                                                  // .. if still has entries left
                {
                    clientToUpdate.GymEntries++;                                                                        // .. increment counter


                    if (trainingEntry.FreeEntry != true  )    // .. decrement entries left under conditions
                    {
                        clientToUpdate.GymEntriesLeft--;
                    }
                 
                }
                else
                {
                    clientToUpdate.GymEntries++;
                }
                
            }
            if (trainingEntry.Training.Type == "SPORTY WALKI")
            {

                if ( clientToUpdate.MartialArtsEntriesLeft >= 999)
                {
                    clientToUpdate.MartialArtsEntriesLeft++;
                }

                if (clientToUpdate.MartialArtsEntriesLeft > 0)
                {
                    clientToUpdate.MartialArtsEntries++;

                    if (trainingEntry.FreeEntry != true)
                    {
                        clientToUpdate.MartialArtsEntriesLeft--;
                    }
                     
                }
                else
                {
                    clientToUpdate.MartialArtsEntries++;
                }

            }


            if (trainingEntry.Locker == null)
            {
                trainingEntry.LockerReturned = true;
            }
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTrainingEntry", new { id = trainingEntry.Id }, trainingEntry);
        }

        // DELETE: api/TrainingEntries/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TrainingEntry>> DeleteTrainingEntry(int id)
        {
            var trainingEntry = await _context.TrainingEntry.FindAsync(id);
            if (trainingEntry == null)
            {
                return NotFound();
            }

            _context.TrainingEntry.Remove(trainingEntry);
            await _context.SaveChangesAsync();

            return trainingEntry;
        }

        private bool TrainingEntryExists(int id)
        {
            return _context.TrainingEntry.Any(e => e.Id == id);
        }
    }
}
