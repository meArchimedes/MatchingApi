using Common;
using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL_AppServices
{
    public interface IFundraiserService
    {

        List<FundraiserViewModel> GetList();
        FundRaiser GetById(int id);
        bool Delete(FundRaiser fundRaiser);
        void Create(FundRaiser fundraiser);
        void Update(FundRaiser campaign);
    }
}
