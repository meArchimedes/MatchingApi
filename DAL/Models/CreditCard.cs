using System;
using System.Collections.Generic;

namespace DAL_Repositories.Models
{
    public partial class CreditCard
    {
        public CreditCard()
        {
            Donations = new HashSet<Donation>();
        }

        public int Id { get; set; }
        public string Type { get; set; } = null!;
        public string Holder { get; set; } = null!;
        public int Number { get; set; }
        public DateTime Exp { get; set; }
        public int Cvv { get; set; }
        public string Result { get; set; } = null!;

        public virtual ICollection<Donation> Donations { get; set; }
    }
}
