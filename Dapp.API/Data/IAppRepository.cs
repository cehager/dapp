using System.Collections.Generic;
using System.Threading.Tasks;
using Dapp.API.Helpers;
using Dapp.API.Models;

namespace Dapp.API.Data
{
  public interface IAppRepository
  {
    void Add<T>(T entity) where T : class;
    void Delete<T>(T entity) where T : class;
    Task<bool> SaveAll();
    Task<PagedList<User>> GetUsers(UserParams userParams);
    Task<User> GetUser(int id);
    Task<Photo> GetPhoto(int id);
    Task<Photo> GetMainPhotoForUser(int userId);
    Task<Like> GetLike(int userId, int recipientId);

  }
}