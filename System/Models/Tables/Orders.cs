using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Tables
{
    public class Orders
    {
        public int OrderID { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
        public bool isPaid { get; set; }
        public bool isFinished { get; set; }
        public int CustomerID { get; set; }
        public int ServiceTypeID { get; set; }
        public int FeedbackID { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
        }
}