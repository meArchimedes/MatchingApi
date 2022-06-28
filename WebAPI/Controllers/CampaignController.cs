using BLAppServices;
using Common;
using DAL_Repositories.Models;
using Microsoft.AspNetCore.Mvc;
namespace WebAPI.Controllers
{
    public class CampaignController:BaseController
    {
        CampaignService service;
        ILogger logger;
        public CampaignController(CampaignService service, ILogger logger)
        {
            service = service;
            this.logger = logger;
        }
        [HttpGet]
        public List<CampaignViewModel> GetAll()
        {
            return service.GetList();
        }
        [HttpGet("{id}", Name ="GetCampaignById")]
        public Campaign GetById(int id)
        {
            return service.GetById(id);
        }
        [HttpPost]
        public void Post(Campaign campaign)
        {
            service.Create(campaign);
        }
        [HttpDelete]
        public bool Delete(Campaign campaign)
        {
            return service.Delete(campaign);
        }
        [HttpPut(Name ="UpdateCampaign")]
        public void Put(Campaign campaign)
        {
            service.Update(campaign);
        }
    }
}
