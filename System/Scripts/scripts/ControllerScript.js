app.controller("controller", function ($scope, service) {


    $scope.customerArray = [];

    $scope.addFunction = function () {
        var customerData = {
            "Name": $scope.Name,
            "Username": $scope.Username,
            "Password": $scope.Password
        }
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
        window.location.href = "/SystemView/Login";
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


    $scope.loginFunction = function () {
        var checkLogin = $scope.customerArray.find(
            items => items.Username == $scope.loggedUsername && items.Password == $scope.loggedPassword);
        if (checkLogin != undefined) {
            alert("logged in");
            window.location.href = "/SystemView/Home";
        } else {
            alert("TS NOT WORKING");
        }

    }

});