using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_Repositories
{
    public class GroupRepository : IGroupRepository
    {
        MatchingContext context;
        public GroupRepository(MatchingContext context)
        {
            this.context = context;
        }

        public void Create(Group entity)
        {
            context.Groups.Add(entity);
        }

        public bool Delete(Group entity)
        {
            try
            {
                context.Groups.Remove(entity);
            }
            catch
            {
                return false;
            }
            return true;
        }

        public List<Group> GetAll()
        {
            return context.Groups.ToList();
        }

        public Group GetById(int id)
        {
            return context.Groups.Where(g => g.Id == id).FirstOrDefault();
        }

        public void Update(Group entity)
        {
            context.Remove(context.Groups.Find(entity));
            context.Groups.Add(entity);
        }
    }
}
