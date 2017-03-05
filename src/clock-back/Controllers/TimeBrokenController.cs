using clock_back.Core;
using Clock_Back.Models;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace clock_back.Controllers
{
    [Route("api/[controller]")]
    public class TimeBrokenController : Controller
    {
        // GET: api/TimeBroken
        [HttpGet]
        public TimeModel Get() => TimeService.GetTime<BrokenClockModel>();
    }
}
