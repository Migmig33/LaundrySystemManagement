using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using LaunderTrack.Models.Tables;
using LaunderTrack.Models.Maps;
namespace System.Models.Context
{
    public class DB_Systemname : DbContext
    { 
        static DB_Systemname()
        {
            Database.SetInitializer<DB_Systemname>(null);

        }
        public DB_Systemname() : base("name=db_laundertrack") { }
        public virtual DbSet<tbl_users_model> tbl_users { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new Users_Mapp());
        }
    }
}