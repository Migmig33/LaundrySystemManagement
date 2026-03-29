app.service("service", function ($http) {


    this.saveUserService = function (data, id) {
        var response = $http({
            url: "/SystemView/SaveCustomers",
            method: "post",
            data: {
                user_data: data,
                id: id
            },
            headers: { "Content-Type": "application/json" }
        })
        return response;

    }
    this.getUserDataService = function () {
        return $http.get("/SystemView/GetCustomers");
    }
});