using Microsoft.EntityFrameworkCore;

namespace ASPNetProj.AppDbContext
{
    public class UsersDbContext : DbContext
    {
        public UsersDbContext(DbContextOptions options)
            : base(options) {}

        public DbSet<Models.Entity.User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Models.Entity.User>()
                        .ToTable("users");
        }
    }
}