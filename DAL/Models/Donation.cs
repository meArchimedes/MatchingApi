using System;
using System.Collections.Generic;

namespace DAL_Repositories.Models
{
    public partial class Donation
    {
        public int Id { get; set; }
        public decimal? Amount { get; set; }
        public string? DonorName { get; set; }
        public string? Email { get; set; }
        public string? Message { get; set; }
        public int FundraiserId { get; set; }
        public int CardId { get; set; }

        public virtual CreditCard Card { get; set; } = null!;
    }
}
