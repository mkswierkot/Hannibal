using CoffeeproofBullet.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class TrainingEntry
    {
        public int Id { get; set; }
        public  virtual Training Training { get; set; }
        public  int TrainingID { get; set; }
        public virtual Client Client { get; set; }
        public int ClientID { get; set; }
        public string Locker { get; set; }
        public bool LockerReturned { get; set; }
        public bool FreeEntry { get; set; }
        public DateTime EntryRegistered { get; set; }
        public string OtherEntryType { get; set; }
    }
}
