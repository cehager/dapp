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
  }
}