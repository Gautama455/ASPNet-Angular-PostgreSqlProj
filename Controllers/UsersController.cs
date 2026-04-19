using ASPNetProj.AppDbContext;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ASPNetProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller
    {
        private readonly UsersDbContext _context;

        public UsersController(UsersDbContext dbContext) {_context = dbContext;}

        [HttpGet]
        public async Task<IEnumerable<Models.Entity.User>> GetAllUsers()
        {
            return await _context.Users.ToListAsync();
        }
    }
}