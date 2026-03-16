using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace System.Models
{
    public class Roles
    {
        public Guid RoleID { get; set; }
        public string RoleName { get; set; } = string.Empty;
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
    }
}