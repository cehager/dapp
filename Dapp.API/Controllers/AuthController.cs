using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Dapp.API.Data;
using Dapp.API.Dtos;
using Dapp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Dapp.API.Controllers
{
  [Route("api/[controller]")]
  [Microsoft.AspNetCore.Mvc.ApiController]
  public class AuthController : ControllerBase
  {
    private readonly IAuthRepository _repo;
    private readonly IConfiguration _config;
    private readonly IMapper _mapper;

    public AuthController(IAuthRepository repo, IConfiguration config, IMapper mapper)
    {
      _mapper = mapper;
      _repo = repo;
      _config = config;
    }

    [HttpPost("Register")]
    public async Task<IActionResult> Register(UserForRegisterDto userForRegisterDto)
    {
      userForRegisterDto.Username = userForRegisterDto.Username.ToLower();
      if (await _repo.UserExists(userForRegisterDto.Username))
        return BadRequest("Username already exists");

      var userToCreate = _mapper.Map<User>(userForRegisterDto);

      var createUser = await _repo.Register(userToCreate, userForRegisterDto.Password);

      var userToReturn = _mapper.Map<UserForDetailDto>(createUser);

      return CreatedAtRoute("GetUser", new { controller = "Users", id = createUser.Id }, userToReturn);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(UserForLoginDto userForLoginDto)
    {
      //throw new Exception("computer says no!");

      var userFromRepo = await _repo.Login(userForLoginDto.Username.ToLower(), userForLoginDto.Password);

      if (userFromRepo == null)
        return Unauthorized();

      var claims = new[]
      {
            new Claim(ClaimTypes.NameIdentifier, userFromRepo.Id.ToString()),
            new Claim(ClaimTypes.Name, userFromRepo.Username)
      };

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));

      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(claims),
        Expires = System.DateTime.Now.AddDays(1),
        SigningCredentials = creds,
      };

      var tokenHandler = new JwtSecurityTokenHandler();

      var token = tokenHandler.CreateToken(tokenDescriptor);

      var user = _mapper.Map<UserForListDto>(userFromRepo);

      return Ok(new
      {
        token = tokenHandler.WriteToken(token),
        user
      });

    }
  }
}
