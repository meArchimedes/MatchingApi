using AutoMapper;
using BL_AppServices;
using Common;
using DAL_Repositories;
using DAL_Repositories.Models;

namespace BLAppServices
{
    public class CampaignService:ICampaignService
    {
        ICampaignRepository repo;
        
        IMapper mapper;
        public CampaignService(ICampaignRepository repo,IMapper mapper)
        {
            
            this.mapper = mapper;
            this.repo = repo;
        }
      
       
       
        public void Update(Campaign campaign)
        {
            repo.Update(campaign);
        }

        public List<CampaignViewModel> GetList()
        {
            //List<CampaignViewModel> CampaignVM = new List<CampaignViewModel>();
            //foreach (var item in repo.GetAll())
            //{
            //    CampaignVM.Add(new CampaignViewModel()
            //    {
            //        Name = item.Name,
            //        Id = item.Id,
            //        Admin = item.AdminNavigation,
            //        Goal = (double)item.Goal,
            //        Collected = (double)item.Collected,
            //        Link = item.Link.ToString(),
            //        Description = item.Description

            //    });
            //}
            List<Campaign> campaigns = repo.GetAll();
            List<CampaignViewModel> CampaignVM = mapper.Map<List<CampaignViewModel>>(campaigns);
            return CampaignVM;
        }

        public Campaign GetById(int id)
        {
            return repo.GetById(id);
        }

        public bool Delete(Campaign campain)
        {
          return   repo.Delete(campain);
        }

       public void Create(Campaign campaign)
        {
            repo.Create(campaign);
        }

        void ICampaignService.Update(Campaign campaign)
        {
            repo.Update(campaign);
        }

       

      
    }
}