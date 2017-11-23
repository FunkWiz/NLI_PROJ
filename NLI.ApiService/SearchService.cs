using NLI.Models;
using NLI.UTILS;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace NLI.ApiService
{
    public class SearchService : BaseService
    {
        private string _searchUrl = ConfigurationManager.AppSettings["SearchUrl"];
        public async Task<string> Search(SearchQuery q)
        {
            return await this.GetResult(BuildQuery(q));
        }
        private Uri BuildQuery(SearchQuery q)
        {
            var values = new NameValueCollection
            {
                {"institution", q.Institution},
                {"loc", q.Scope },
                {"query", q.Query },
                {"indx", q.Index },
                {"bulkSize", q.BulkSize },
                {"json", q.Json }
            };
            //http://primo.nli.org.il/PrimoWebServices/xservice/search/brief?institution=NNL&loc=local,scope:(NNL_Ephemera)&query=lsr41,exact,yes&indx=1&bulkSize=50&json=true
            return UriHelper.BuildUri(this._searchUrl, values);
        }
    }
}
