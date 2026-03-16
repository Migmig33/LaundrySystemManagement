using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace System.Models
{
    public class Feedbacks
    {
        public Guid FeedbackID { get; set; }
        public string FeedbackDesc { get; set; } = string.Empty;
        public Guid CustomerID { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
    }
}