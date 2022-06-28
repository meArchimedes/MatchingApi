using BL_AppServices.Profiles;
using DAL;
using Microsoft.Extensions.DependencyInjection;
using DAL_Repositories;
using BLAppServices;

namespace BL_AppServices
{
    public static class IServiceCollectionExtensions
    {
        public static void AddAppServices(this IServiceCollection ServiceCollection)
        {
            ServiceCollection.AddScoped<ICampaignService, CampaignService>();
            ServiceCollection.AddScoped<IGroupService, GroupService>();
            ServiceCollection.AddScoped<IFundraiserService, FundraiserService>();
            ServiceCollection.AddScoped<IDonationService, DonationService>();
            ServiceCollection.AddAutoMapper(config => config.AddProfile<CampaignProfile>());
            ServiceCollection.AddRepositories();
        }
    }
}
