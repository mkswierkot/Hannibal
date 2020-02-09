using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuctorAPI.Models
{
    public class TrainingSchedule
    {
        public int Id { get; set; }
        public string Day { get; set; }
        public TimeSpan HourStarts { get; set; }
        public TimeSpan? HourFinishes { get; set; }

        public int TrainingId { get; set; }
        public Training Training { get; set; }

    }
}
