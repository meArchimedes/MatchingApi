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
    public class GroupService:IGroupService
    {

        IGroupRepository repo;
       
        public GroupService(IGroupRepository repo)
        {
            this.repo = repo;
        }


        public List<GroupViewModel> GetList()
        {
            List<GroupViewModel> GroupVM = new List<GroupViewModel>();
            foreach (var item in repo.GetAll())
            {
                GroupVM.Add(new GroupViewModel()
                {
                    Name = item.Name,
                    Id = item.Id,
                    Fundraiser = item.Fundraiser,
                    Goal = (double)item.Goal,
                    Collected = (double)item.Collected,


                }); ;
            }
            return GroupVM;
        }
       
        public void Create(Group group)
        {
            repo.Create(group);
        }
        public bool Delete(Group group)
        {
            return repo.Delete(group);
        }
      

    


       public void Update(Group group)
        {
            repo.Update(group);
        }


        public Group GetById(int id)
        {
          return  repo.GetById(id);   
        }
    }
}
