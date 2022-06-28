using Common;
using DAL_Repositories;
using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL_AppServices
{
    public class FundraiserService:IFundraiserService
    {

        IFundraiserRepository repo;

        public FundraiserService(IFundraiserRepository repo)
        {
            this.repo = repo;
        }


        public List<FundraiserViewModel> GetList()
        {
            List<FundraiserViewModel> FundraiserVM = new List<FundraiserViewModel>();
            foreach (var item in repo.GetAll())
            {
                FundraiserVM.Add(new FundraiserViewModel()
                {
                    Name = item.Name,
                    Email = item.Email,
                    PhoneNumber = item.PhoneNo,
                    Goal = (double)item.Goal,
                    Collected = (double)item.Collected,


                }); ; ;
            }
            return FundraiserVM;
        }
        public FundRaiser GetById(int id)
        {
            return repo.GetById(id);
        }
        public void Create(FundRaiser fundraiser)
        {
            repo.Create(fundraiser);
        }
        public bool Delete(FundRaiser fundraiser)
        {
            return repo.Delete(fundraiser);
        }
        public void Update(FundRaiser fundraiser)
        {
            repo.Update(fundraiser);
        }
    }
}
