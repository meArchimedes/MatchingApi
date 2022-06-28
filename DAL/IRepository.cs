using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL_Repositories
{
    public interface IRepository<T>
    {
        public List<T> GetAll();
        public T GetById(int id);
        public void Create(T entity);
        public void Update(T entity);
        public bool Delete(T entity);

    }
}
