using CoffeeproofBullet.Libraries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class Training : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public virtual FacilityType FacilityType { get; set; } 
        public int FacilityTypeID { get; set; } 
        public bool IsDeleted { get; set; }

    }
}
