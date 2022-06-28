using DAL;
using System;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;
using DAL_Repositories.Models;

namespace DAL_Repositories
{
    public static class IServiceCollectionExtensions
    {
        public static void AddRepositories(this IServiceCollection serviceCollection)
        {
            serviceCollection.AddScoped<ICampaignRepository, CampaignRepository>();
            serviceCollection.AddScoped<IGroupRepository, GroupRepository>();
            serviceCollection.AddScoped<IDonationRepository, DonationRepository>();
            serviceCollection.AddScoped<IFundraiserRepository, FundraiserRepository>();
            serviceCollection.AddDbContext<MatchingContext>();

        }
    }
}
