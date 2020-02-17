using CoffeeproofBullet.Data;
using CoffeeproofBullet.Libraries;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CoffeeproofBullet.Concrete
{
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class, IEntity
    {
        protected readonly MyDbContext context;

        public GenericRepository(MyDbContext context)
        {
            this.context = context;
        } 
        public IEnumerable<TEntity> GetAllEntities(Expression<Func<TEntity, object>> include)
        {
            return context.Set<TEntity>().Where(ent => ent.IsDeleted != true).Include(include).OrderBy(c=>c.Id);
        }
        public async Task<TEntity> GetEntity(int id, params Expression<Func<TEntity, object>>[] include)
        {
            var query = context.Set<TEntity>().Where(c => c.Id == id && c.IsDeleted != true);
             
            foreach(Expression<Func<TEntity, object>> predicate in include)
            {
              query = query.Include(predicate); 
            }

            return await query.FirstOrDefaultAsync();
        }

        public async Task CreateEntity(TEntity entity)
        {
            await context.Set<TEntity>().AddAsync(entity);
            await context.SaveChangesAsync();
        }
        public async Task UpdateEntity(int id, TEntity entity)
        { 
            context.Set<TEntity>().Update(entity);
            await context.SaveChangesAsync();
        }
        public async Task DeleteEntity(int id)
        {
            var entity = await context.Set<TEntity>().FindAsync(id);
            entity.IsDeleted = true;
            await context.SaveChangesAsync();
        }

    }
}
