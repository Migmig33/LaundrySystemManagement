using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Tables
{
    public class Orders
    {
        public Guid OrderID { get; set; }
        public int Price { get; set; }
        public int Quantity { get; set; }
        public bool isPaid { get; set; }
        public bool isFinished { get; set; }
        public Guid CustomerID { get; set; }
        public Guid ServiceTypeID { get; set; }
        public Guid FeedbackID { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
        }
}