using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LaunderTrack.Models.Tables
{
    public class Services
    {
        public Guid ServiceTypeID { get; set; }
        public string ServiceType { get; set; } = string.Empty;
        public int Price { get; set; }
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
    }
}