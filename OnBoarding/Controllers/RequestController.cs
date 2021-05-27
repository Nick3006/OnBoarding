using CatWhiteboard.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using OnBoarding.Models;
using OnBoarding.ViewModels;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace OnBoarding.Controllers
{
    public class RequestController : Controller
    {
        private readonly ILogger<RequestController> _logger;

        public RequestController(ILogger<RequestController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {

            List<DashViewModel> userList = new List<DashViewModel>();
            DashViewModel d1 = new DashViewModel()
            {
                Reference = "NUF-001",
                User = "Bloggs, Joe",
                DateRequestedString = "2021-02-24",
                StartDateString = "2021-02-26",
                Status = "Complete"
            };
            userList.Add(d1);
            d1 = new DashViewModel()
            {
                Reference = "NUF-002",
                User = "Rabbit, Peter",
                DateRequestedString = "2021-04-2",
                StartDateString = "2021-05-03",
                Status = "In Progress"
            };
            userList.Add(d1);
            d1 = new DashViewModel()
            {
                Reference = "NUF-003",
                User = "Blinks, Jaja",
                DateRequestedString = "2021-02-20",
                StartDateString = "2021-05-03",
                Status = "Over Due"
            };
            userList.Add(d1);

            return View(userList);
        }


        public IActionResult Create()
        {
            OnboardRequestViewModel rView = new OnboardRequestViewModel();

            List<SelectListItem> nne = new List<SelectListItem>();
            SelectListItem none = new SelectListItem()
            {
                Value = "none",
                Text = "None",
                Selected = true
            };
            nne.Add(none);
            SelectListItem existing = new SelectListItem()
            {
                Value = "existing",
                Text = "Existing",
                Selected = false
            };
            nne.Add(existing);
            SelectListItem newone = new SelectListItem()
            {
                Value = "new",
                Text = "New",
                Selected = false
            };
            nne.Add(newone);
            ViewBag.NoneNewExisting = nne;

            return View(rView);
        }
        public IActionResult Create1()
        {
            return View("Create1");
        }
        public IActionResult Create2()
        {
            return View("Create2");
        }
        public IActionResult Create3()
        {
            return View("Create3");
        }

        public IActionResult New()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
