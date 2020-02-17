using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Libraries
{
    public interface IGenericRepository<TEntity> where TEntity: class, IEntity
    {
        IEnumerable<TEntity> GetAllEntities(Expression<Func<TEntity, object>> include);
        Task<TEntity> GetEntity(int id, params Expression<Func<TEntity, object>>[] include);
        Task CreateEntity(TEntity entity);
        Task UpdateEntity(int id, TEntity entity);
        Task DeleteEntity(int id);
    }
}
