using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{
    public class TrainingEntry
    {
        public int Id { get; set; }
        
        public int TrainingId { get; set; }
        public Training Training { get; set; }

        public int ClientId { get; set; }
        public Client Client { get; set; }

        public int? Locker { get; set; }
        public Boolean LockerReturned { get; set; }

        public Boolean? FreeEntry { get; set; }
        public DateTime EntryRegistered { get; set; }

        public string OtherEntryType { get; set; }
    }
}
