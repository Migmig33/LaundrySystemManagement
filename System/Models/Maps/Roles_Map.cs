using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using LaunderTrack.Models.Tables;
namespace LaunderTrack.Models.Maps
{
    public class Roles_Map : EntityTypeConfiguration<Roles>
    {
        public Roles_Map()
        {
            HasKey(x => x.RoleID);
            ToTable("tbl_roles");
        }
    }
}