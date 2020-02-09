using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{


    public class Contract
    {
        [Key]
        public int Id { get; set; }

        public Group Group { get; set; }
        public int GroupId { get; set; }

        public Client Client { get; set; }
        public int ClientId { get; set; }

        public DateTime? EntryDate { get; set; }
        public bool? PaymentRequired { get; set; }

        public bool? Alert { get; set; }
        public bool? IsDeleted { get; set; }

    }

}
