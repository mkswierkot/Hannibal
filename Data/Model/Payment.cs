using CoffeeproofBullet.Libraries;
using CoffeeproofBullet.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class Payment : IEntity
    {
        public int Id { get; set; }

        public virtual Client Client { get; set; }
        public int ClientID { get; set; }
         
        public virtual Subscription Subscription { get; set; }
        public int SubscriptionID { get; set; }
        public int CashRegistered { get; set; }
        public bool PaymentCompleted { get; set; }
        public string AdditionalInformation { get; set; }
        public DateTime? PaymentRegistered { get; set; }
        public bool IsDeleted { get; set; }
    }
}
