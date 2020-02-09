using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{
    [Serializable]
    public class Client
    {
        [Key]
        public int Id { get; set; }
        
        public int CardId { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }

        public string PersonalInfo => "ID: " + CardId + ": " + Name + " " + Surname;

        public int? GymEntries { get; set; }
        public int? MartialArtsEntries { get; set; }

        public int? GymEntriesLeft { get; set; }
        public int? MartialArtsEntriesLeft { get; set; }

        public DateTime? ClientJoined { get; set; }
        
        public int? SubscriptionId { get; set; }
        public virtual Subscription Subscription { get; set; }
        public DateTime? SubscriptionExpires { get; set; }

        


        public bool? IsDeleted { get; set; }

        public List<Payment> Payments { get; set; }
        public List<Contract> Contracts { get; set; }  
    }
    
}
