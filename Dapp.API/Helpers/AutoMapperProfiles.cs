using System.Linq;
using AutoMapper;
using Dapp.API.Dtos;
using Dapp.API.Models;

namespace Dapp.API.Helpers
{
  public class AutoMapperProfiles : Profile
  {
    public AutoMapperProfiles()
    {
      CreateMap<User, UserForListDto>()
      .ForMember(dest => dest.PhotoUrl, opt =>
        opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
      .ForMember(dest => dest.Age, opt =>
        opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

      CreateMap<User, UserForDetailDto>()
      .ForMember(dest => dest.PhotoUrl, opt =>
        opt.MapFrom(src => src.Photos.FirstOrDefault(p => p.IsMain).Url))
        .ForMember(dest => dest.Age, opt =>
        opt.MapFrom(src => src.DateOfBirth.CalculateAge()));

      CreateMap<Photo, PhotosForDetailDto>();
    }
  }
}