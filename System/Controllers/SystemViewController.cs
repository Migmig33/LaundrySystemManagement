using LaunderTrack.Models.Context;
using LaunderTrack.Models.Tables;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
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
        public ActionResult Customers()
        {
            return View();
        }
        public ActionResult Orders()
        {
            return View();
        }
        public ActionResult OrderDetails()
        {
            return View();
        }
        public ActionResult Reports()
        {
            return View();
        }
       
        public string SaveCustomers(Users user_data, int? id)
        {
        
            try
            {
                using (var connect = new DB_Context())
                {
                    System.Diagnostics.Debug.WriteLine("Data is" + user_data.Name);
                    System.Diagnostics.Debug.WriteLine("the id is: " + id);
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
                        connect.tbl_users.Add(newUserData);
                        connect.SaveChanges();

                        var newCustomerData = new Customers
                        {
                            UserID = user_data.UserID,
                            RoleID = user_data.RoleID,
                            CreatedAt = DateTime.Now,
                            ModifiedAt = DateTime.Now
                        };
                        connect.tbl_customers.Add(newCustomerData);
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
                return ErrorHandling(ex);
            }
        }
        public string SaveOrders(Orders order_data, int? id)
        {
            System.Diagnostics.Debug.WriteLine("data is " + id);
            try
            {
                using(var connect = new DB_Context())
                {
                    var getDataIndex = connect.tbl_orders.Where(x => x.OrderID == id).FirstOrDefault();
                    if(getDataIndex == null)
                    {
                        //if index is null insert
                        var newOrders = new Orders
                        {
                            CustomerID = order_data.CustomerID,
                            ServiceTypeID = order_data.ServiceTypeID,
                            Quantity = order_data.Quantity,
                            isPaid = order_data.isPaid,
                            isFinished = order_data.isFinished,
                            CreatedAt = order_data.CreatedAt,
                            ModifiedAt = order_data.ModifiedAt
                        };
                       connect.tbl_orders.Add(newOrders);
                       connect.SaveChanges();
                    }
                    else
                    {
                        //else update
                        getDataIndex.CustomerID = order_data.CustomerID;
                        getDataIndex.ServiceTypeID = order_data.ServiceTypeID;
                        getDataIndex.Quantity = order_data.Quantity;
                        getDataIndex.isPaid = order_data.isPaid;
                        getDataIndex.isFinished = order_data.isFinished;
                        getDataIndex.ModifiedAt = order_data.ModifiedAt;
                        connect.SaveChanges();
                    }
                }
                return "Success";

            }catch(Exception ex)
            {
                return ErrorHandling(ex);
            }

        }

        public JsonResult GetCustomers()
        {
            try
            {
                using (var connect = new DB_Context())
                {
                    //var data = connect.tbl_users.Select(x => x).ToList(); // Select all
                    //var data = (from customers in connect.tbl_customers
                    //            join orders in connect.tbl_orders on customers.UserID equals orders.CustomerID
                    //            select new { customers, orders }
                    //            ); // select where* join*
                    var data = (from customers in connect.tbl_customers
                                join users in connect.tbl_users on customers.UserID equals users.UserID
                                join roles in connect.tbl_roles on users.RoleID equals roles.RoleID
                                select new
                                {
                                    
                                    UserID = customers.UserID,
                                    CustomerID = customers.CustomerID,
                                    Name = users.Name,
                                    Contact = users.Contact,
                                    Address = users.Address,
                                    RoleName = roles.RoleName,
                                    CreatedAt = users.CreatedAt,
                                    Username = users.Username,
                                    Password = users.Password

                                }
                                ).ToList();
     
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                string error = ErrorHandling(ex);
                return Json(new { success = false, error = error }, JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetOrders()
        {
            try
            {
                using(var connect = new DB_Context())
                {
                    // this query runs directly to the sql
                    var raw = (from orders in connect.tbl_orders
                                join customers in connect.tbl_customers on orders.CustomerID equals customers.CustomerID
                                join users in connect.tbl_users on customers.UserID equals users.UserID
                                join services in connect.tbl_services on orders.ServiceTypeID equals services.ServiceTypeID
                                orderby orders.CreatedAt descending 
                                select new
                                {
                                    OrderID = orders.OrderID,
                                    Name = users.Name,
                                    Price = services.Price * orders.Quantity,
                                    Quantity = orders.Quantity,
                                    ServiceType = services.ServiceType,
                                    isPaid = orders.isPaid,
                                    isFinished = orders.isFinished,
                                    CreatedAt = orders.CreatedAt
                                }).ToList();

                    // this second query runs from the c# memory
                    var data = raw.Select(o => new {
                        OrderID = o.OrderID,
                        Name = o.Name,
                        Price = o.Price,
                        Quantity = o.Quantity,
                        ServiceType = o.ServiceType,
                        isPaid = o.isPaid,
                        isFinished = o.isFinished,
                        CreatedAt = o.CreatedAt.ToString("yyyy-MM-dd HH:mm:ss")
                    }).ToList();
                    System.Diagnostics.Debug.WriteLine("the data is " + data);
                    return Json(data, JsonRequestBehavior.AllowGet);
                }
            }catch(Exception ex)
            {
                string error = ErrorHandling(ex);
                return Json(new { success = false, error = error }, JsonRequestBehavior.AllowGet);
            }
        }
        public JsonResult GetServices()
        {
            try
            {
                using (var connect = new DB_Context()) 
                {
                    var data = connect.tbl_services.Select(x =>x).ToList();
                    return Json(new {success = true, data = data}, JsonRequestBehavior.AllowGet);
                }
                
            }
            catch(Exception ex)
            {
                string error = ErrorHandling(ex);
                return Json(new { success = false, error = error }, JsonRequestBehavior.AllowGet);
            }
        }
        public string ErrorHandling(Exception ex)
        {
            var errorMessage = $@"
            ===== ERROR DETAILS =====
            Message        : {ex.Message}
            Type           : {ex.GetType().FullName}
            Source         : {ex.Source}
            Stack Trace    : {ex.StackTrace}
            Inner Exception: {(ex.InnerException != null ? ex.InnerException.Message : "None")}
            Timestamp      : {DateTime.Now:yyyy-MM-dd HH:mm:ss}
            =========================";

            return errorMessage;
        }

    }
}