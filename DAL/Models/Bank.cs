﻿using System;
using System.Collections.Generic;

namespace DAL_Repositories.Models
{
    public partial class Bank
    {
        public int Id { get; set; }
        public string Bank1 { get; set; } = null!;
        public int Branch { get; set; }
        public int AcountNo { get; set; }
        public string Beneficiary { get; set; } = null!;
    }
}
