using System;
using System.Collections.Generic;

namespace DAL_Repositories.Models
{
    public partial class Campaign
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int? Admin { get; set; }
        public decimal Goal { get; set; }
        public decimal Collected { get; set; }
        public decimal Link { get; set; }
        public string? Description { get; set; }

        public virtual FundRaiser? AdminNavigation { get; set; }
    }
}
