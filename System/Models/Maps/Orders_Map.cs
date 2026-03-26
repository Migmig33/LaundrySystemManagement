using System;
using System.Collections.Generic;
using LaunderTrack.Models.Tables;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Maps
{
    public class Orders_Map : EntityTypeConfiguration<Orders>
    {
        public Orders_Map()
        {
            HasKey(x => x.OrderID);
            ToTable("tbl_orders");
        }
    }
}