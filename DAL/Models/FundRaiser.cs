using System;
using System.Collections.Generic;

namespace DAL_Repositories.Models
{
    public partial class FundRaiser
    {
        public FundRaiser()
        {
            Campaigns = new HashSet<Campaign>();
            Groups = new HashSet<Group>();
        }

        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int PhoneNo { get; set; }
        public string Email { get; set; } = null!;
        public double Goal { get; set; }
        public double? Collected { get; set; }
        public int GroupId { get; set; }

        public virtual ICollection<Campaign> Campaigns { get; set; }
        public virtual ICollection<Group> Groups { get; set; }
    }
}
