using CoffeeproofBullet.Libraries;
using CoffeeproofBullet.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class Information : IEntity
    {
        public int Id { get; set; }
        public Client Client { get; set; }
        public int ClientID { get; set; }
        public bool IsDeleted { get; set; }
        public string Content { get; set; }
        public DateTime InformationEntered { get; set; }
    }
}
