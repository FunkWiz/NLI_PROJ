using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NLI.Startup))]
namespace NLI
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
