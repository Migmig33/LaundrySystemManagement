using System;
using LaunderTrack.Models.Tables;   
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Maps
{
    public class Users_Map : EntityTypeConfiguration<Users>
    {
       public Users_Map()
       {
           HasKey(x => x.UserID);
           ToTable("tbl_users");
               
       }
    }
}