using NLI.ApiService;
using NLI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace NLI.Controllers
{
    public class ActionController : Controller
    {
        SearchService _searchService;
        public ActionController()
        {
            _searchService = new SearchService();
        }
        public async Task<string> Search(SearchQuery q)
        {
            q.Json = "true";
            q.Institution = "NNL";
            q.Scope = "NNL_Ephemera";
            return await _searchService.Search(q);
        }
    }
}