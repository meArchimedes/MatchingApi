using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class GroupViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public FundRaiser Fundraiser { get; set; }
        public List<FundRaiser> Fundraisers { get; set; }
        public double Goal { get; set; }
        public double Collected { get; set; }



    }
}
