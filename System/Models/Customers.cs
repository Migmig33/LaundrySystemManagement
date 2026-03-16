using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace System.Models
{
    public class Customers
    {
        public Guid CustomerID { get; set; }
        public Guid RoleID { get; set; }
        public Guid UserID { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
    }
}