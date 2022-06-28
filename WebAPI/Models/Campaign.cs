using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Campaign
    {
        public Campaign()
        {
            Banks = new HashSet<Bank>();
        }

        public int CampaignId { get; set; }
        public string Name { get; set; } = null!;
        public int? Admin { get; set; }
        public decimal Goal { get; set; }
        public decimal Collected { get; set; }
        public string Link { get; set; } = null!;
        public string? Description { get; set; }

        public virtual FundRaiser? AdminNavigation { get; set; }
        public virtual ICollection<Bank> Banks { get; set; }
    }
}
