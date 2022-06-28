using Microsoft.AspNetCore.Mvc;
using BL_AppServices;
using DAL_Repositories.Models;
using Common;

namespace WebAPI.Controllers
{
    public class FundraiserController:BaseController
    {
        FundraiserService service;

        public FundraiserController(FundraiserService service)
        {
            service = service;
        }



        [HttpGet]
        public List<FundraiserViewModel> GetAll()
        {
            return service.GetList();
        }
        [HttpGet("{id}", Name = "GetFundraiserById")]
        public FundRaiser GetById(int id)
        {
            return service.GetById(id);
        }
        [HttpPost]
        public void Post(FundRaiser fundraiser)
        {
            service.Create(fundraiser);
        }
        [HttpDelete]
        public bool Delete(FundRaiser fundraiser)
        {
            return service.Delete(fundraiser);
        }
        [HttpPut(Name = "UpdateFundraiser")]
        public void Put(FundRaiser fundraiser)
        {
            service.Update(fundraiser);
        }

    }
}
