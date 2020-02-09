using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{
    public class Information
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; } 
        public Boolean? Display { get; set; }
        public string Content { get; set; }
         
    }
}
