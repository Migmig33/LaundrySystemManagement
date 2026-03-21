using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using LaunderTrack.Models.Tables;
using System.Models.Context;
using System.Web.Razor.Generator;

namespace System.Controllers
{
    public class SystemViewController : Controller
    {
        // GET: SystemView
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Registration()
        {
            return View();
        }
        public ActionResult Login()
        {
            return View();
        }
        public ActionResult Dashboard()
        {
            return View();
        }
        public ActionResult Home()
        {
            return View();
        }
        public string SaveUser()
        {
            try
            {
                using (var connect = new DBContext())
                {
                    var user_data = new Users
                    {
                       Name = "lala",
                       Contact = "lala",
                       Address = "Request.Form[]",
                       Username = "Request.Form[Username",
                       Password = "Request.Form[password",
                       RoleID = 1,  
                       CreatedAt = DateTime.Now,
                       ModifiedAt = DateTime.Now,
                       isActive = 1
                    };
                    connect.tbl_users.Add(user_data);
                    connect.SaveChanges();
                }
                return "success";
            }
            catch(Exception ex)
            {
                var inner = ex.InnerException != null ? ex.InnerException.Message : "No inner exception";

                var errorMessage = $@"
ERROR: {ex.Message}
INNER: {inner}
STACK: {ex.StackTrace}
";

                return errorMessage;
            }
        }
        public string ErrorHandling(string errorMessage, string innerException, string stackTrace)
        {
            var errorMessages = $"the error is : {errorMessage} : {innerException} : {stackTrace}";
            return errorMessages;
        }

    }
}