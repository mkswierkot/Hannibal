using CoffeeproofBullet.Libraries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class Subscription : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<SubscriptionElement> SubscriptionElements { get; set; }
        public int Price { get; set; }
        public bool IsDeleted { get; set; }
    }
}
