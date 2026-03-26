using System;
using System.Collections.Generic;
using System.Data.Entity;
using LaunderTrack.Models.Tables;
using LaunderTrack.Models.Maps;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using System.Data.Entity.Core.Metadata.Edm;

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
        public virtual DbSet<Customers> tbl_customers { get; set; }
        public virtual DbSet<Orders> tbl_orders { get; set; }
        public virtual DbSet<Services> tbl_services { get; set; }
        public virtual DbSet<Feedbacks> tbl_feedbacks { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new Maps.Users_Map());
            modelBuilder.Configurations.Add(new Maps.Customers_Map());
            modelBuilder.Configurations.Add(new Maps.Orders_Map());
            modelBuilder.Configurations.Add(new Maps.Services_Map());
            modelBuilder.Configurations.Add(new Maps.Feedbacks_Map());

        }
    }
}