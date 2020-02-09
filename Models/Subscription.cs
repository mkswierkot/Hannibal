using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{
    public class Subscription
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public int GymEntries { get; set; }
        public int MartialArtsEntries { get; set; }
        public int Price { get; set; }
  
        public Boolean IsDeleted { get; set;  }             
        
        // Soft delete - people might still wait for they subscription to expire, while it is already deleted

    }
}
