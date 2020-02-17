using CoffeeproofBullet.Libraries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class FacilityType : IEntity
    {
        // if company offers n number of services, (gym, martial arts, yoga, swimming pool etc), they may wany to sell seperate business offers
        // for each service - each should be represented by individual facility
        public int Id { get; set; }
        public string Name { get; set; } 
        public bool IsDeleted { get; set; }
    }
}
