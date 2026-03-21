using System;
using System.Collections.Generic;
using LaunderTrack.Models.Tables;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace System.Models.Maps
{
    public class Customers_Map : EntityTypeConfiguration<Customers>
    {
        public Customers_Map()
        {
            HasKey(x => x.CustomerID);
            ToTable("tbl_customers");
        }
    
    }
}