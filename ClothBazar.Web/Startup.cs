using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ClothBazar.Web.Startup))]
namespace ClothBazar.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
