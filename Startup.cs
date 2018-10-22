using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;

namespace ForDelete
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                // добавляем сборку через webpack
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "areas",
                    template: "{area:exists}/{controller}/{action}");
                routes.MapRoute(
                    name: "default",
                    template: "{area=Admin}/{controller=Home}/{action=Index}/{id?}");
            });
            /*
             * {area=Admin}/
             * 
            routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { Areas = "Admin", controller = "Home", action = "Index" });
                    */
        }
    }
}
