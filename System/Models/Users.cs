using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace System.Models
{
    public class Users
    {
        public Guid UserID { get; set; }
        public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
        public string Contact { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public Guid RoleID { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public DateTime createdAt { get; set; }
        public DateTime modifiedAt { get; set; }
        public bool isActive { get; set; }

    }
}