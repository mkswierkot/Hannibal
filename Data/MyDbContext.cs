using CoffeeproofBullet.Data.Model;
using CoffeeproofBullet.Model;
using Microsoft.EntityFrameworkCore;
 
namespace CoffeeproofBullet.Data
{
    public class MyDbContext : DbContext
    {


        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options) { }
       



        public DbSet<Client> Client { get; set; }
        public DbSet<ClientEntriesLeft> ClientEntriesLeft { get; set; }
        public DbSet<Information> Information { get; set; }
        public DbSet<Subscription> Subscription { get; set; }
        public DbSet<Payment> Payment { get; set; } 
        public DbSet<Training> Training { get; set; }
        public DbSet<TrainingSchedule> TrainingSchedule { get; set; }
        public DbSet<TrainingEntry> TrainingEntry { get; set; }  
        public DbSet<SubscriptionElement> SubscriptionElement { get; set; }  
        public DbSet<Group> Group { get; set; }
        public DbSet<Contract> Contract { get; set; }
        public DbSet<FacilityType> FacilityType { get; set; }

        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);
        //}

    }
}
