using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{

    public class Group
    {
        [Key]
        public int Id { get; set; } 
        public string Name { get; set; } 
        public bool? ContractRelatedGroup { get; set; }
     
        public bool IsDeleted { get; set; }
         
    }
    
}
