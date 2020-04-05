using System;
using System.ComponentModel.DataAnnotations;

namespace Dapp.API.Dtos
{
  public class UserForRegisterDto
  {
    [Required]
    public string Username { get; set; }
    [Required]
    [StringLength(12, MinimumLength = 4, ErrorMessage = "Password must be greater than 4 characters and less then 12")]
    public string Password { get; set; }
    public string Gender { get; set; }
    public string KnowAs { get; set; }
    public DateTime DateOfBirth { get; set; }
    public string City { get; set; }
    public string Country { get; set; }
    public DateTime Created { get; set; }
    public DateTime LastActive { get; set; }

    public UserForRegisterDto()
    {
      Created = DateTime.Now;
      LastActive = DateTime.Now;
    }

  }
}