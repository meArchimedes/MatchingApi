using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_Repositories
{
    public class FundraiserRepository : IFundraiserRepository
    {

        MatchingContext context;
        public FundraiserRepository(MatchingContext context)
        {
            this.context = context;
        }
        public void Create(FundRaiser entity)
        {
           context.FundRaisers.Add(entity); 
        }

        public bool Delete(FundRaiser entity)
        {
            try
            {
                context.FundRaisers.Remove(entity);
            }
            catch (Exception)
            {

                return false;
            }
            return true;
        }

        public List<FundRaiser> GetAll()
        {
          return context.FundRaisers.ToList();
        }

        public FundRaiser GetById(int id)
        {
         
            return context.FundRaisers.Where(c => c.Id == id).FirstOrDefault();
        }

        public void Update(FundRaiser entity)
        {
            context.FundRaisers.Remove(entity);
            context.FundRaisers.Add(entity);
        }
    }
}
