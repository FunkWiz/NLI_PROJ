using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NLI.Models
{
    public class SearchQuery
    {
        private string _scope;

        public string Scope
        {
            get { return String.Format("local,scope:({0})", _scope); }
            set { _scope = value; }
        }

        public string Json { get; set; }
        public string Query { get; set; }
        public string Institution { get; set; }
        public string Index { get; set; }
        public string BulkSize { get; set; }
    }
}
