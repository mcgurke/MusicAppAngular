using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicApp2017.Models;

namespace MusicApp2017.Controllers
{
    [Produces("application/json")]
    [Route("api/Genres1")]
    public class Genres1Controller : Controller
    {
        private readonly MusicDbContext _context;

        public Genres1Controller(MusicDbContext context)
        {
            _context = context;
        }

        // GET: api/Genres1
        [HttpGet]
        public IEnumerable<Genre> GetGenres()
        {
            return _context.Genres;
        }

        // GET: api/Genres1/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetGenre([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var genre = _context.Genres;

            if (genre == null)
            {
                return NotFound();
            }

            return Ok(genre);
        }

        // PUT: api/Genres1/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGenre([FromRoute] int id, [FromBody] Genre genre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != genre.GenreID)
            {
                return BadRequest();
            }

            _context.Entry(genre).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GenreExists(id))
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

        // POST: api/Genres1
        [HttpPost]
        public async Task<IActionResult> PostGenre([FromBody] Genre genre)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Genres.Add(genre);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGenre", new { id = genre.GenreID }, genre);
        }

        // DELETE: api/Genres1/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGenre([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var genre = await _context.Genres.SingleOrDefaultAsync(m => m.GenreID == id);
            if (genre == null)
            {
                return NotFound();
            }

            _context.Genres.Remove(genre);
            await _context.SaveChangesAsync();

            return Ok(genre);
        }

        private bool GenreExists(int id)
        {
            return _context.Genres.Any(e => e.GenreID == id);
        }
    }
}