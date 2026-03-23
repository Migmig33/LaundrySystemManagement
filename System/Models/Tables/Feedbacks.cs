using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Tables
{
    public class Feedbacks
    {
        public int FeedbackID { get; set; }
        public string FeedbackDesc { get; set; } = string.Empty;
        public int CustomerID { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
    }
}