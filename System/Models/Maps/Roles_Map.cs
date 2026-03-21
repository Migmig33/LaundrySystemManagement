using System;
using System.Data.Entity.ModelConfiguration;
using LaunderTrack.Models.Tables;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace System.Models.Maps
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