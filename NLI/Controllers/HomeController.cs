using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NLI.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            GeneratePageData(new
            {
                id = 1
            });
            return View();
        }
        private void GeneratePageData(object data)
        {
            ViewBag.BaseUrl = string.Format("window._apiUrl='{0}'", ConfigurationManager.AppSettings["BaseUrl"]);
            ViewBag.PageData = string.Format("window._pageData={0}", JsonConvert.SerializeObject(data));
        }
    }
}