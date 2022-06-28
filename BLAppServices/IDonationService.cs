using Common;
using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL_AppServices
{
    public interface IDonationService
    {

        List<DonationViewModel> GetList();
       
        Donation GetById(int id);
        bool Delete(Donation donation);
        void Create(Donation donation);
        void Update(Donation donation);
    }
}
