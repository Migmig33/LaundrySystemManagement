using System;
using System.Collections.Generic;
using System.Data.Entity;
using LaunderTrack.Models.Tables;
using LaunderTrack.Models.Maps;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Context
{
    public class DB_Context : DbContext
    {
        static DB_Context()
        {
            Database.SetInitializer<DB_Context>(null);
        }
        public DB_Context(): base("name=db_laundertrack") { }
        public virtual DbSet<Users> tbl_users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new Maps.Users_Map());
           
        }
    }
}