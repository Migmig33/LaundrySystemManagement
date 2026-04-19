using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Tables
{
    public class Orders
    {
        public int OrderID { get; set; }
        public int Quantity { get; set; }
        public int isPaid { get; set; }
        public int isFinished { get; set; }
        public int CustomerID { get; set; }
        public int ServiceTypeID { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? ModifiedAt { get; set; }
        }
}