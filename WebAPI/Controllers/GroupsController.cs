using BL_AppServices;
using Common;
using DAL_Repositories.Models;
using Microsoft.AspNetCore.Mvc;


namespace WebAPI.Controllers
{
    public class GroupsController : BaseController
    {
       GroupService service;

        public GroupsController(GroupService service)
        {
            service = service;
        }



        [HttpGet]
        public List<GroupViewModel> GetAll()
        {
            return service.GetList();
        }
        [HttpGet("{id}", Name = "GetGroupById")]
        public Group GetById(int id)
        {
            return service.GetById(id);
        }
        [HttpPost]
        public void Post(Group group)
        {
            service.Create(group);
        }
        [HttpDelete]
        public bool Delete(Group group)
        {
            return service.Delete(group);
        }
        [HttpPut(Name = "UpdateGroup")]
        public void Put(Group group)
        {
            service.Update(group);
        }

    }
}
