using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AuctorAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace AuctorAPI.Models
{ 
    public class AuctorAPIContext : DbContext
    {
     

        public AuctorAPIContext(DbContextOptions<AuctorAPIContext> options)
            : base(options)
        {
        }

        public DbSet<AuctorAPI.Models.Client> Client { get; set; }

        public DbSet<AuctorAPI.Models.Information> Information { get; set; }

        public DbSet<AuctorAPI.Models.Subscription> Subscription { get; set; }

        public DbSet<AuctorAPI.Models.Payment> Payment { get; set; }

        public DbSet<AuctorAPI.Models.Training> Training { get; set; }

   
        public DbSet<AuctorAPI.Models.TrainingSchedule> TrainingSchedule { get; set; }

        public DbSet<AuctorAPI.Models.TrainingEntry> TrainingEntry { get; set; }

        public DbSet<Entities.User> Users { get; set; }

        public DbSet<AuctorAPI.Models.Group> Group { get; set; }

        public DbSet<AuctorAPI.Models.Contract> Contract { get; set; }
        

    }
}
