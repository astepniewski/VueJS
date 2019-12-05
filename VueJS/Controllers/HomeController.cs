using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Globalization;
using VueJS.Models;
using VueJS.Resources;

namespace VueJS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var model = new BaseModel();
            model.Resources = ResourceFactory.GetResource(new CultureInfo("en"), "IndexResource");
            return View(model);
        }

        public IActionResult About()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
