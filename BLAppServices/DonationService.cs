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
    public class DonationService : IDonationService
    {
        IDonationRepository repo;
        public DonationService(IDonationRepository repo)
        {
            repo = repo;
        }
        public void Create(Donation donation)
        {
           repo.Create(donation);   
        }

        public bool Delete(Donation donation)
        {
          return repo.Delete(donation);
        }

        public Donation GetById(int id)
        {
        return  repo.GetById(id);
        }

        public List<DonationViewModel> GetList()
        {
            List<DonationViewModel> DonationVM = new List<DonationViewModel>();
            foreach (var item in repo.GetAll())
            {
                DonationVM.Add(new DonationViewModel()
                {
                    Name=item.DonorName,
                    Message=item.Message,
                    Amount=(double)item.Amount

                   

                });
            }
            return DonationVM;
        }

        public void Update(Donation donation)
        {
            repo.Update(donation); 
        }
    }
}
