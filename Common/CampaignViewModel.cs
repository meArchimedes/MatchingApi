using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class CampaignViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public FundRaiser? Admin { get; set; }
        public double Goal { get; set; }
        public double Collected { get; set; }
        public string Link { get; set; }
        public int BankId { get; set; }
        public Bank Bank { get; set; }
        public string Description { get; set; }

        public int GroupId { get; set; }
        public List<Group> Groups { get; set; }
    }
}
