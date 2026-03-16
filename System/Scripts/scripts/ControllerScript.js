app.controller("controller", function ($scope, service) {

    $scope.isMobile = false;
    $scope.isWeb = false;
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
                null;
            }
        }
    });
    $scope.userArray = [];
  

    $scope.addFunction = function () {

        $scope.NameField = false;
        $scope.ContactField = false;
        $scope.RoleField = false;
        $scope.UsernameField = false;
        $scope.PasswordField = false;
        hasError = false;
        if (!$scope.Name || $scope.Name.trim() === ""){$scope.NameField = true; hasError = true;}
        if (!$scope.Contact || $scope.Contact.trim() === ""){$scope.ContactField = true; hasError = true;}
        if (!$scope.RoleID || $scope.RoleID.trim() === "") {$scope.RoleField = true; hasError = true;}
        if (!$scope.Username || $scope.Username.trim() === ""){$scope.UsernameField = true; hasError = true;}
        if (!$scope.Password || $scope.Password.trim() === ""){$scope.PasswordField = true; hasError = true;}
        if (hasError) {
            Swal.fire({
                title: "Invalid",
                text: "Please Fill the field",
                icon: "error"
            });
        } else {
            var customerData = {
                "Name": $scope.Name,
                "Contact": $scope.Contact,
                "Address": $scope.Address,
                "RoleID": $scope.RoleID,
                "Username": $scope.Username,
                "Password": $scope.Password
            }
            Swal.fire({
                title: "Success!",
                text: "Customer Successfully Added!",
                icon: "success"
            });
            $scope.userArray.push(customerData);
            $scope.checkDatas();
        }
       
    }

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
            case "Orders":
                return window.location.href = "/SystemView/Orders";
            case "Reports":
                return window.location.href = "/SystemView/Reports"
            default:
                return null;
        }

    }
    


    $scope.loginFunction = function () {
        var checkLogin = $scope.userArray.find(
            items => items.Username == $scope.loggedUsername && items.Password == $scope.loggedPassword);
        if (checkLogin != undefined) {
            Swal.fire({
                title: "Success!",
                text: "You Have Logged In!",
                icon: "success"
            });
            sessionStorage.setItem("UserLoginData", JSON.stringify(checkLogin));
            if (checkLogin?.RoleID === "admin") { $scope.redirectFunc("Dashboard"); }
            if (checkLogin?.RoleID === "customer") { $scope.redirectFunc("Home"); }
        
        
        }else {
            Swal.fire({
                icon: "error",
                title: "Invalid",
                text: "Wrong Username or Password!",
            });
        }

    }
    $scope.getLoginDataFunc = function () {
        var userData = sessionStorage.getItem("UserLoginData");
        $scope.UserInfo = JSON.parse(userData);
        var totalUsers = document.getElementById("TotalUsers").innerText = " Users";
    }
    
});