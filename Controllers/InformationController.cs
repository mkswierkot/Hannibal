﻿using System;
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
    [Produces("application/json")]
    [ApiController]
    public class InformationController : ControllerBase
    {
        private readonly AuctorAPIContext _context;

        public InformationController(AuctorAPIContext context)
        {
            _context = context;
        }

        // GET: api/Information
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Information>>> GetInformation()
        {
            return await _context.Information.ToListAsync();
        }


        // GET: api/Information/5
        [HttpGet("{id}")]
        public IEnumerable<Information> GetClientRelatedInformation(int id)
        {
            return _context.Information.Where(c => c.Client.Id == id && c.Display == true);
        }


        //public async Task<ActionResult<Information>> GetInformation(int id )
        //{
        //    var information = await _context.Information.FindAsync(id);

        //    if (information == null)
        //    {
        //        return NotFound();
        //    }

        //    return information;
        //}

        // PUT: api/Information/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInformation(int id, Information information)
        {
            if (id != information.Id)
            {
                return BadRequest();
            }

            _context.Entry(information).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InformationExists(id))
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

        // POST: api/Information
        [HttpPost]
        public async Task<ActionResult<Information>> PostInformation(Information information)
        {
            _context.Information.Add(information);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInformation", new { id = information.Id }, information);
        }

        // DELETE: api/Information/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Information>> DeleteInformation(int id)
        {
            var information = await _context.Information.FindAsync(id);
            if (information == null)
            {
                return NotFound();
            }

            _context.Information.Remove(information);
            await _context.SaveChangesAsync();

            return information;
        }

        private bool InformationExists(int id)
        {
            return _context.Information.Any(e => e.Id == id);
        }
    }
}
