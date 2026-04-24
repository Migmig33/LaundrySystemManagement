app.controller("controller", function ($scope, service) {

    // Screen ResponsivenesssssssssssssssassSS
    $scope.isMobile = false;
    $scope.isWeb = false;


    // Fields Error Output
    //Customer
    $scope.NameField = false;
    $scope.ContactField = false;
    $scope.RoleField = false;
    $scope.UsernameField = false;
    $scope.PasswordField = false;
    
    //Orders
    $scope.NameField = false;
    $scope.QuantityField = false;
    $scope.ServiceField = false;
    $scope.PaidField = false;

    //Service
    $scope.ServiceTypeField = false;
    $scope.PriceField = false;
    hasError = false;


    //Pages

    $scope.Dashboard = false;
    $scope.Customers = false;
    $scope.Orders = false;
    $scope.Services = false;
    $scope.Reports = false;
    
    window.addEventListener('resize', function () {
        $scope.$apply(function () {
            if (window.innerWidth <= 480) {
                $scope.isMobile = true;
                $scope.isWeb = false
            } else {    
                $scope.isMobile = false;
                $scope.isWeb = true;
            }
        });
        
    });

    $scope.openMenuFunc = function () {
        var sidebar = document.getElementById('sidebar');

        sidebar.classList.add("show");
        console.log("this is working");
    }
    document.addEventListener('click', function (event) {
        var sidebar = document.getElementById('sidebar');
        var menubar = document.getElementById('menubar');
        if (window.innerWidth <= 768) {
            if (!sidebar.contains(event.target) && !menubar.contains(event.target)) {
                sidebar.classList.remove('show');
                console.log("this nigga working");
            } else {
                console.log(null);
            }
        }
    });
    $scope.userArray = [];
  

    //$scope.addFunction = function () {
    //    if (!$scope.Name || $scope.Name.trim() === ""){$scope.NameField = true; hasError = true;}
    //    if (!$scope.Contact || $scope.Contact.trim() === ""){$scope.ContactField = true; hasError = true;}
    //    if (!$scope.RoleID || $scope.RoleID.trim() === "") {$scope.RoleField = true; hasError = true;}
    //    if (!$scope.Username || $scope.Username.trim() === ""){$scope.UsernameField = true; hasError = true;}
    //    if (!$scope.Password || $scope.Password.trim() === ""){$scope.PasswordField = true; hasError = true;}
    //    if (hasError) {
    //        Swal.fire({
    //            title: "Invalid",
    //            text: "Please Fill the field",
    //            icon: "error"
    //        });
    //    } else {
    //        var customerData = {
    //            "Name": $scope.Name,
    //            "Contact": $scope.Contact,
    //            "Address": $scope.Address,
    //            "RoleID": $scope.RoleID,
    //            "Username": $scope.Username,
    //            "Password": $scope.Password
    //        }
    //        Swal.fire({
    //            title: "Success!",
    //            text: "Customer Successfully Added!",
    //            icon: "success"
    //        });
    //        $scope.userArray.push(customerData);
    //        $scope.checkDatas();
    //    }
       
    //}

    $scope.removeFunction = function () {
        $scope.Name = " ";
        $scope.Username = " ";
        $scope.Password = " ";

    }
    $scope.deleteFunction = function (index) {
        $scope.userArray.splice(index, 1);

        $scope.checkDatas();
    }
    $scope.updateFunction = function (index) {
        var newData = $scope.userArray[index];
        newData.Name = $scope.Name;
        newData.Username = $scope.Username;
        newData.Password = $scope.Password;
       
    }   


    $scope.checkDatas = function () {
        if ($scope.userArray.length >= 1) {
            $scope.showButton = true;
        } else {
            $scope.showButton = false;
        }
    }

    $scope.directLogin = function () {
        var defaultAdmin = {
            "Name": "Miguel",
            "Contact": "09272413924",
            "Address": "Pagitan",
            "RoleID": "admin",
            "Username": "67",
            "Password": "67"
        }

        var defaultCustomer = {
            "Name": "Tan",
            "Contact": "09272413924",
            "Address": "Pagitan",
            "RoleID": "customer",
            "Username": "77",   
            "Password": "77"
        }

        $scope.userArray.push(defaultAdmin, defaultCustomer);
        var storedData = JSON.stringify($scope.userArray);
        sessionStorage.setItem("UserArray", storedData);
        $scope.redirectFunc("Login");
    }
    $scope.getData = function () {
        var userDatas = sessionStorage.getItem("UserArray");
        var storedJSONs = JSON.parse(userDatas);
        $scope.userArray = storedJSONs;


    }
    $scope.cancelLogin = function () {
        $scope.loggedUsername = " ";
        $scope.loggedPassword = " ";
    }

    $scope.redirectFunc = function (page) {
        switch (page){
            case "Login":
                return window.location.href = "/SystemView/Login";
            case "Register":
                return window.location.href = "/SystemView/Registration";
            case "Index":
                return window.location.href = "/SystemView/Index";
            case "Home":
                return window.location.href = "/SystemView/Home";
            case "Dashboard":
                return window.location.href = "/SystemView/Dashboard";
            case "Customers":
                return window.location.href = "/SystemView/Customers";
            case "CustomerDetails":
                return window.location.href = "/SystemView/CustomerDetails";
            case "Orders":
                return window.location.href = "/SystemView/Orders";
            case "OrderDetails":
                return window.location.href = "/SystemView/OrderDetails";
            case "Reports":
                return window.location.href = "/SystemView/Reports"
            case "Services":
                return window.location.href = "/SystemView/Services";
            default:
                return null;
        }

    }
  
 
    


    //$scope.loginFunction = function () {
    //    var checkLogin = $scope.userArray.find(
    //        items => items.Username == $scope.loggedUsername && items.Password == $scope.loggedPassword);
    //    if (checkLogin != undefined) {
    //        Swal.fire({
    //            title: "Success!",
    //            text: "You Have Logged In!",
    //            icon: "success"
    //        });
    //        sessionStorage.setItem("UserLoginData", JSON.stringify(checkLogin));
    //        if (checkLogin?.RoleID === "admin") { $scope.redirectFunc("Dashboard"); }
    //        if (checkLogin?.RoleID === "customer") { $scope.redirectFunc("Home"); }
        
        
    //    }else {
    //        Swal.fire({
    //            icon: "error",
    //            title: "Invalid",
    //            text: "Wrong Username or Password!",
    //        });
    //    }

    //}
    //$scope.getLoginDataFunc = function () {
    //    var userData = sessionStorage.getItem("UserLoginData");
    //    $scope.UserInfo = JSON.parse(userData);
    //}






    // CONNECTED TO THE BACKEND FUNCTIONS

    $scope.loginFunction = function (id) {
        if (!$scope.loggedUsername || !$scope.loggedUsername) {
            Swal.fire({
                icon: "error",
                title: "Invalid",
                text: "Please fill the Input Fields"
            })
        } else {
            var loginCredentials = {
                Username: $scope.loggedUsername,
                Password: $scope.loggedPassword
            };
            var loginAuth = service.loginAuthService(loginCredentials);
            loginAuth.then(function (response) {
                if (response.data.success) {
                    if (response.data.role == 1) {
                        $scope.userDetails = response.data.data;
                        var jsonConverted = JSON.stringify($scope.userDetails);
                        sessionStorage.setItem("AdminDetailsData", jsonConverted);
                        $scope.redirectFunc("Dashboard");

                    } else if (response.data.role == 2) {
                        $scope.userDetails = response.data.data;
                        var jsonConverted = JSON.stringify($scope.userDetails);
                        sessionStorage.setItem("UserDetailsData", jsonConverted);
                        $scope.redirectFunc("Home")
                    }
                } else {
                    alert(response.data.message);
                }
            })
        }
    }

    // Save Users/Customers
    $scope.saveUserFunc = function (id) {
      
        if (!$scope.Name) { $scope.NameField = true; hasError = true; }
        if (!$scope.Contact) { $scope.ContactField = true; hasError = true; }
        if (!$scope.Username) { $scope.UsernameField = true; hasError = true; }
        if (!$scope.Password) { $scope.PasswordField = true; hasError = true; }
        if (hasError) {
            Swal.fire({
                icon: "error",
                title: "Invalid!",
                text: "Please fill out Required Field!",
            });
        } else {
            $scope.userData = {
                Name: $scope.Name,
                Contact: $scope.Contact,
                Address: $scope.Address,
                RoleID: 2,
                Username: $scope.Username,
                Password: $scope.Password,
                CreatedAt: new Date(),
                ModifiedAt: new Date(),
                isActive: 1
            };
            console.log("data is", $scope.userData);
            console.log("id is", id);
            var saveUserData = service.saveUserService($scope.userData, id);
            saveUserData.then(function (response) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.data
                });
            });
            
        }
        
    }
    $scope.saveOrdersFunc = function (id) {
        alert(id);
      
        if (!$scope.Name) { hasError = true; NameField = true }
        if (!$scope.Quantity) { hasError = true; QuantityField = true }
        if (!$scope.Name) { hasError = true; ServiceField = true }
        if (!$scope.Name) { hasError = true; PaidField = true }
        if (hasError) {
            Swal.fire({
                icon: "error",
                title: "Invalid!",
                text: "Please fill out required field"
            });
        } else {
            var orderData = {
                CustomerID: $scope.Name,
                Quantity: $scope.Quantity,
                ServiceTypeID: $scope.ServiceTypeID,
                isPaid: $scope.isPaid,
                isFinished: $scope.isFinished,
                CreatedAt: new Date(),
                ModifiedAt: new Date()

            };
            var saveOrderData = service.saveOrderService(orderData, id)
            saveOrderData.then(function (response) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: response.data

                });
            })
        }
    }
    $scope.saveServicesFunc = function (id) {
        if (!$scope.ServiceType && !$scope.DetailsServiceType) {
            hasError = true; ServiceTypeField = true;
        }
        if (!$scope.Price && !$scope.DetailsPrice) {
            hasError = true; PriceField;
        }
        if (hasError) {
            Swal.fire({
                icon: "error",
                title: "Invalid!",
                text: "Please fill out required fields"
            });
        } else {
            var serviceData = {
                ServiceType: $scope.ServiceType || $scope.DetailsServiceType,
                Price: $scope.Price || $scope.DetailsPrice,
                CreatedAt: new Date(),
                ModifiedAt: new Date()
            };
            var saveServiceData = service.saveServiceTypeService(serviceData, id);
            saveServiceData.then(function (response) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: response.data
                });
                $scope.showFormService = false;

            })
        }
    }
    $scope.saveFeedbackFunc = function (customerID, orderID, id) {
        alert(id);
        if (!$scope.FeedbackDesc) {
            Swal.fire({
                icon: "error",
                title: "Invalid",
                text: "Please fill out required fields"
            })
        } else {
            var feedbackData = {
                FeedbackDesc: $scope.FeedbackDesc,
                CustomerID: customerID,
                OrderID: orderID

            }
            console.log(feedbackData);
            var saveFeedbackData = service.saveFeedbackService(feedbackData, id)
                saveFeedbackData.then(function (response) {
                alert(response.data)
            })
        }
    }
    // Get Users/Customers
    $scope.getUsersDataFunc = function () {
        var getUserData = service.getUserDataService()
            getUserData.then(function (returnedData) {
                $scope.userDatas = returnedData.data;
            })
    }

    $scope.getOrdersDataFunc = function () {

        var getOrdersData = service.getOrdersDataService()
        getOrdersData.then(function (returnedData) {
            $scope.ordersData = returnedData.data;
        })
        $scope.getServicesDataFunc();
    }
    $scope.getServicesDataFunc = function () {
        var getServicesData = service.getServicesDataService()
        getServicesData.then(function (returnedData) {
            $scope.servicesData = returnedData.data.data;
            
        })
    }
    $scope.getFeedbackDataFunc = function () {
        var getFeedbackData = service.getFeedbackDataService()
        getFeedbackData.then(function (returnedData) {
            $scope.feedbackDatas = returnedData.data;
            $scope.FeedbackLength = $scope.feedbackDatas.length;
            alert($scope.feedbackDatas.length);
        })
    }

    //Delete Functions
    $scope.deleteUserFunc = function (id) {
       
        var deleteThisUser = service.deleteUserService(id);
        deleteThisUser.then(function (response) {
            if (response.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: response.data.message
                })
                redirectFunc("Customers");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.data.message
                })
            }
        });
    }
    $scope.deleteOrderFunc = function (id) {

        var deleteThisOrder = service.deleteOrderService(id);
        deleteThisOrder.then(function (response) {
            if (response.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: response.data.message
                })
                redirectFunc("Orders");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.data.message
                })
            }
        });
    }
    $scope.deleteServiceFunc = function (id) {
        var deleteThisService = service.deleteServiceTypeService(id);
        deleteThisService.then(function (response) {
            if (response.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: response.data.message
                })
                $scope.showDetailsService = false;
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: response.data.message
                    
                })
            }
        });
    }

    // Direct Functions
    //View
    $scope.getUserDetails = function () {
        var getUserDetails = sessionStorage.getItem("UserDetailsData");
        var jsonParse = JSON.parse(getUserDetails);
        $scope.Name = jsonParse.Name;
        $scope.FeedbackID = jsonParse.FeedbackID || jsonParse.Order.FeedbackID;
        $scope.UserID = jsonParse.UserID;
        $scope.isFinished = jsonParse.Order.isFinished;
        $scope.isPaid = jsonParse.Order.isPaid;
        $scope.ServiceType = jsonParse.Order.ServiceType;
        $scope.CreatedAt = jsonParse.Order.CreatedAt;
        $scope.CustomerID = jsonParse.Order.CustomerID;
        $scope.OrderID = jsonParse.Order.OrderID;
        
    }
    $scope.directCustomerDetailsFunc = function (id) {
        var customerDetailsData = $scope.userDatas.find(
            items => items.CustomerID == id
        );
        sessionStorage.setItem("CustomerDetailsData", JSON.stringify(customerDetailsData));
        $scope.redirectFunc("CustomerDetails");
    }
    $scope.getCustomerDetailsDataFunc = function () {
        var customerDetailsData = sessionStorage.getItem("CustomerDetailsData");
        parsedData = JSON.parse(customerDetailsData);
        $scope.UserID = parsedData.UserID;
        $scope.CustomerID = parsedData.CustomerID;
        $scope.Name = parsedData.Name;
        $scope.Contact = parsedData.Contact;
        $scope.Address = parsedData.Address;
        $scope.Username = parsedData.Username;
        $scope.Password = parsedData.Password;
        $scope.CreatedAt = parsedData.CreatedAt;
        $scope.isActive = parsedData.isActive;
        $scope.Options = [
            { value:1, label: "Active" },
            { value: 2, label: "Inactive"}
        ]

        
    }
    $scope.directOrderDetailsFunc = function (id) {
        var orderDetailsData = $scope.ordersData.find(
            items => items.OrderID == id
        );
        sessionStorage.setItem("OrderDetailsData", JSON.stringify(orderDetailsData));
        $scope.redirectFunc("OrderDetails");

    }
    

    $scope.getOrderDetailsDataFunc = function () {
        var orderDetailsData = sessionStorage.getItem("OrderDetailsData");
        parsedData = JSON.parse(orderDetailsData);
        $scope.OrderID = parsedData.OrderID;
        $scope.Name = parsedData.Name;
        $scope.Price = parsedData.Price;
        $scope.Quantity = parsedData.Quantity;
        $scope.ServiceType = parsedData.ServiceType;
        $scope.isPaid = parsedData.isPaid;
        $scope.isFinished = parsedData.isFinished;
        $scope.CreatedAt = parsedData.CreatedAt;
        $scope.Options = [
            { value: 1, label: "Yes" },
            { value: 0, label: "No" }

        ];
    }

    $scope.showServiceDetails = function (id) {
        alert(id);
        var serviceDetailsData = $scope.servicesData.find(
            items => items.ServiceTypeID == id
        );
        $scope.DetailsServiceTypeID = serviceDetailsData.ServiceTypeID;
        $scope.DetailsServiceType = serviceDetailsData.ServiceType;
        $scope.DetailsPrice = serviceDetailsData.Price;
        $scope.DetailsCreatedAt = serviceDetailsData.CreatedAt;
        $scope.showDetailsService = true;
    }
});