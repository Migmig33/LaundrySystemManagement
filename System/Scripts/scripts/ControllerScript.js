app.controller("controller", function ($scope, service) {


    $scope.customerArray = [];

    $scope.addFunction = function () {
        var customerData = {
            "Name": $scope.Name,
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
        $scope.redirectFunctions(1);
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

    $scope.redirectFunctions = function (number) {
        switch (number){
            case 1:
                return window.location.href = "/SystemView/Login";
            case 2:
                return window.location.href = "/SystemView/Registration";
            case 3:
                return window.location.href = "/SystemView/Home";
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
            $scope.redirectFunctions(3);
        } else {
            Swal.fire({
                icon: "error",
                title: "Invalid",
                text: "Wrong Username or Password!",
            });
        }

    }

});