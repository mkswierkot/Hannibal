using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Data.Model
{
    public class TrainingSchedule
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public TimeSpan HourStarts { get; set; }
        public TimeSpan? HourFinishes { get; set; }
        public int TrainingID { get; set; }
        public virtual Training Training { get; set; }
    }
}
