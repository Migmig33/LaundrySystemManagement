using System;
using System.Collections.Generic;
using LaunderTrack.Models.Tables;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Maps
{
    public class Services_Map : EntityTypeConfiguration<Services>   
    {
        public Services_Map()
        {
            HasKey(x => x.ServiceTypeID);
            ToTable("tbl_services");
        }
    }
}