using clock_back.Core;
using Clock_Back.Models;
using Microsoft.AspNet.Mvc;

namespace clock_back.Controllers
{
    [Route("api/[controller]")]
    // ReSharper disable once UnusedMember.Global
    public class TimeController : Controller
    {
        [HttpGet]
        public object Get() => TimeService.GetTime<ClockModel>();
    }
}
