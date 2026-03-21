using System;
using System.Collections.Generic;
using System.Data.Entity;
using LaunderTrack.Models.Tables;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;

namespace System.Models.Context
{
    public class DBContext : DbContext
    {
        static DBContext()
        {
            Database.SetInitializer<DBContext>(null);
        }
        public DBContext(): base("name=db_laundertrack") { }
        public virtual DbSet<Users> tbl_users { get; set; }
        public virtual DbSet<Customers> tbl_customers { get; set; }
        public virtual DbSet<Orders> tbl_orders { get; set; }
        public virtual DbSet<Services> tbl_services { get; set; }
        public virtual DbSet<Roles> tbl_roles { get; set; }
        public virtual DbSet<Feedbacks> tbl_feedbacks { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Configurations.Add(new Maps.Users_Map());
            modelBuilder.Configurations.Add(new Maps.Customers_Map());
            modelBuilder.Configurations.Add(new Maps.Orders_Map());
            modelBuilder.Configurations.Add(new Maps.Services_Map());
            modelBuilder.Configurations.Add(new Maps.Roles_Map());
            modelBuilder.Configurations.Add(new Maps.Feedbacks_Map());
        }
    }
}