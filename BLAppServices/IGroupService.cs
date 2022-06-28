using Common;
using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL_AppServices
{
    internal interface IGroupService
    {

        List<GroupViewModel> GetList();
        Group GetById(int id);
       
        bool Delete(Group group);
        void Create(Group group);
        void Update(Group group);
    }
}
