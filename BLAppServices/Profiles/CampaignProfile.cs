using AutoMapper;
using Common;
using DAL_Repositories.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL_AppServices.Profiles
{
    public class CampaignProfile: Profile
    {
        public CampaignProfile()
        {
            //CreateMap<Campaign, CampaignViewModel>().ForMember
            //    (
            //    c => c.Groups,
            //    g => g.MapFrom(g => $"{g.Name}{g.Goal}{g.Collected}"))
            //    .ReverseMap();
        }
    }
}
