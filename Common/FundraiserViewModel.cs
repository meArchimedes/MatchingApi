using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class FundraiserViewModel
    {

        public int Id { get; set; }
        public long PhoneNumber { get; set; }
        public string Email { get; set; }
        public double Goal { get; set; }
        public string Name { get; set; }
        public double Collected { get; set; }
        public Group Group { get; set; }

        public int GroupId { get; set; }
    }
}
