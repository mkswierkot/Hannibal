using CoffeeproofBullet.Libraries;
using CoffeeproofBullet.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class Contract : IEntity
    {
        public int Id { get; set; }
        public  Group Group { get; set; }
        public  Client Client { get; set; }
        public DateTime EntryDate { get; set; }
        public bool PaymentRequired { get; set; }
        public bool Alert { get; set; }
        public bool IsDeleted { get; set; }
    }
}
