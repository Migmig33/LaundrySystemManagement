using LaunderTrack.Models.Context;
using LaunderTrack.Models.Tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Razor.Generator;
using System.Web.Security;
using System.Xml.Linq;

namespace LaunderTrack.Controllers
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
        public string SaveUser(Users user_data, int id)
        {
        
            try
            {
                using (var connect = new DB_Context())
                {

                    System.Diagnostics.Debug.WriteLine("the id is : " + id);
                    //GetRowIndex
                    var getDataIndex = connect.tbl_users.Where(x => x.UserID == id).FirstOrDefault();
                        
                    if(getDataIndex == null) 
                    {
                        // if null iInsert
                        var newUserData = new Users
                        {
                            Name = user_data.Name,
                            Contact = user_data.Contact,
                            Address = user_data.Address,
                            Username = user_data.Username,
                            Password = user_data.Password,
                            RoleID = user_data.RoleID,
                            CreatedAt = user_data.CreatedAt,
                            ModifiedAt = user_data.ModifiedAt,
                            isActive = user_data.isActive
                        };
                        connect.tbl_users.Add(user_data);
                        connect.SaveChanges();
                    }
                    else
                    {
                        // if empty update
                        getDataIndex.Name = user_data.Name;
                        getDataIndex.Contact = user_data.Contact;
                        getDataIndex.Address = user_data.Address;
                        getDataIndex.Username = user_data.Username;
                        getDataIndex.Password = user_data.Password;
                        getDataIndex.ModifiedAt = user_data.ModifiedAt;
                        connect.SaveChanges();

                    }
                }
                return "success";
               
            }
            catch (Exception ex)
            {
                
                return ErrorHandling(ex.Message, ex.InnerException.ToString(), ex.StackTrace);
            }
        }
        public string ErrorHandling(string errorMessage, string innerException, string stackTrace)
        {
            var errorMessages = $"the error is : {errorMessage} : {innerException} : {stackTrace}";
            return errorMessages;
        }

    }
}