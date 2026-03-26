using System;
using System.Collections.Generic;
using LaunderTrack.Models.Tables;
using System.Data.Entity.ModelConfiguration;    
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Maps
{
    public class Feedbacks_Map : EntityTypeConfiguration<Feedbacks>
    {
        public Feedbacks_Map()
        {
            HasKey(x => x.FeedbackID);
            ToTable("tbl_feedbacks");
        }
    }
}