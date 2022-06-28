using Microsoft.AspNetCore.Mvc;
using BL_AppServices;
using DAL_Repositories.Models;
using Common;
namespace WebAPI.Controllers
{
    public class DonationController:BaseController
    {
        DonationService service;

        public DonationController(DonationService service)
        {
            service = service;
        }



        [HttpGet]
        public List<DonationViewModel> GetAll()
        {
            return service.GetList();
        }
        [HttpGet("{id}", Name = "GetDonationById")]
        public Donation GetById(int id)
        {
            return service.GetById(id);
        }
        [HttpPost]
        public void Post(Donation donation)
        {
            service.Create(donation);
        }
        [HttpDelete]
        public bool Delete(Donation donation)
        {
            return service.Delete(donation);
        }
        [HttpPut(Name = "UpdateDonation")]
        public void Put(Donation donation)
        {
            service.Update(donation);
        }

    }
}
