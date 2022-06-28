using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_Repositories
{
    public class DonationRepository : IDonationRepository
    {
        MatchingContext context;
        public DonationRepository(MatchingContext context)
        {
            this.context = context;
        }

        public void Create(Donation entity)
        {
          context.Donations.Add(entity);

        }

        public bool Delete(Donation entity)
        {
            try
            {
                context.Donations.Remove(entity);
            }
            catch (Exception)
            {

                return false;
            }
            return true;        
        }

        public List<Donation> GetAll()
        {

          return  context.Donations.ToList();
        }

        public Donation GetById(int id)
        {
          return  context.Donations.Where(d => d.Id == id).FirstOrDefault();
        }

        public void Update(Donation entity)
        {

            context.Donations.Remove(entity);
            context.Donations.Add(entity);
        }

   
    }
}
