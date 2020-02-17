using CoffeeproofBullet.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class ClientEntriesLeft
    {
        public int ID { get; set; }
        public int ClientID { get; set; }
        public int FacilityTypeID { get; set; }
        public int? AmountEntries { get; set; }
        public bool InfniteAmountOfEntires { get; set; }

        public virtual Client Client { get; set; }
        public virtual FacilityType FacilityType { get; set; }
    }
}
