using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{
    public class Training
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public bool? IsDeleted { get; set; }

    }
}
