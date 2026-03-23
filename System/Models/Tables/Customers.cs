using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Tables    
{
    public class Customers
    {
        public int CustomerID { get; set; }
        public int RoleID { get; set; }
        public int UserID { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
    }
}