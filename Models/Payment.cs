using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{
    public class Payment
    {
        [Key]
        public int Id { get; set; }

        public int ClientId { get; set; }
         
        public virtual Client Client { get; set; }

        public int? SubscriptionId { get; set; }
       
        public  Subscription Subscription { get; set; }

        public int CashRegistered { get; set; }
        public Boolean PaymentCompleted { get; set; }

        public string AdditionalInformation { get; set; }

        public DateTime? PaymentRegistered { get; set; }
        public DateTime? SubscriptionExpires { get; set; }
 
        

 

    }
}
