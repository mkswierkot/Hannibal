using CoffeeproofBullet.Data.Model;
using CoffeeproofBullet.Libraries;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Model
{
    public class Client : IEntity
    {
        [Key]
        public int Id { get; set; } 
        public string CardId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public ICollection<ClientEntriesLeft> EntriesLeft { get; set; }
        public DateTime? ClientJoined { get; set; }
        public int SubscriptionID { get; set; }
        public Subscription Subscription { get; set; }
        public DateTime? SubscriptionExpires { get; set; }
        public bool SubscriptionExpired { get; set; }
        public bool IsDeleted { get; set; }
        public ICollection<Payment> Payments { get; set; }
        public ICollection<Contract> Contracts { get; set; }
    
    }
}
