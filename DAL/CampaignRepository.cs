using DAL_Repositories;
using DAL_Repositories.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class CampaignRepository : ICampaignRepository
    {
        MatchingContext context;
        public CampaignRepository(MatchingContext context)
        {
            this.context = context;
        }
        public void Create(Campaign entity)
        {
            context.Add(entity);
        }

        public bool Delete(Campaign entity)
        {
            try
            {
                context.Remove(context.Campaigns.Find(entity));
            }
            catch
            {
                return false;
            }
            return true;
        }

        public List<Campaign> GetAll()
        {
            
            return context.Campaigns.Include(c=>c.Admin).ToList();
        }

        public Campaign GetById(int id)
        {
            return context.Campaigns.Where(c => c.Id == id).FirstOrDefault();
        }

        public void Update(Campaign entity)
        {
            context.Remove(context.Campaigns.Find(entity));
            context.Add(entity);
        }
    }
}