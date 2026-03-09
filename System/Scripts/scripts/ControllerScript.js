app.controller("controller", function ($scope, service) {


    $scope.customerArray = [];

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
            $scope.customerArray.push(customerData);
            $scope.checkDatas();
        }
       
    }

    $scope.removeFunction = function () {
        $scope.Name = " ";
        $scope.Username = " ";
        $scope.Password = " ";

    }
    $scope.deleteFunction = function (index) {
        $scope.customerArray.splice(index, 1);

        $scope.checkDatas();
    }
    $scope.updateFunction = function (index) {
        var newData = $scope.customerArray[index];
        newData.Name = $scope.Name;
        newData.Username = $scope.Username;
        newData.Password = $scope.Password;
       
    }   


    $scope.checkDatas = function () {
        if ($scope.customerArray.length >= 1) {
            $scope.showButton = true;
        } else {
            $scope.showButton = false;
        }
    }

    $scope.directLogin = function () {
        var storedData = JSON.stringify($scope.customerArray);
        sessionStorage.setItem("UserArray", storedData);
        $scope.redirectFunc(1);
    }
    $scope.getData = function () {
        var userDatas = sessionStorage.getItem("UserArray");
        var storedJSONs = JSON.parse(userDatas);
        $scope.customerArray = storedJSONs;


    }
    $scope.cancelLogin = function () {
        $scope.loggedUsername = " ";
        $scope.loggedPassword = " ";
    }

    $scope.redirectFunc = function (number) {
        switch (number){
            case 1:
                return window.location.href = "/SystemView/Login";
            case 2:
                return window.location.href = "/SystemView/Registration";
            case 3:
                return window.location.href = "/SystemView/Home";
            case 4:
                return window.location.href = "/SystemView/Index";
            default:
                return null;
        }

    }
    


    $scope.loginFunction = function () {
        var checkLogin = $scope.customerArray.find(
            items => items.Username == $scope.loggedUsername && items.Password == $scope.loggedPassword);
        if (checkLogin != undefined) {
            Swal.fire({
                title: "Success!",
                text: "You Have Logged In!",
                icon: "success"
            });
            $scope.redirectFunc(3);
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid",
                text: "Wrong Username or Password!",
            });
        }

    }

});