using CoffeeproofBullet.Libraries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class SubscriptionElement : IEntity
    {
        // np. 20 entries on GYM related to SuperExtended subscription
        public int Id { get; set; }
        public FacilityType FacilityType {get;set;}
        public int FacilityTypeID {get;set;}
        public int AmountOfEntries {get;set;}

        public Subscription Subscription { get; set; }
        public int SubscriptionID { get; set; }
        public bool IsDeleted { get;set; }
    }
}
