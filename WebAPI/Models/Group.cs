using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class Group
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int FundraiserId { get; set; }
        public int Goal { get; set; }
        public int Collected { get; set; }
        public int CampaignId { get; set; }

        public virtual FundRaiser Fundraiser { get; set; } = null!;
    }
}
