using Common;
using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL_AppServices
{
    public interface ICampaignService
    {
        //***
        List<CampaignViewModel> GetList();
        Campaign GetById(int id);
      
        bool Delete(Campaign campaign);
       void Create(Campaign campaign);  
       void Update(Campaign campaign);


        

    }
}
