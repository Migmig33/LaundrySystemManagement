app.service("service", function ($http) {


    this.saveUserService = function (data) {
        var response = $http({
            url: "/SystemView/SaveUser",
            method: "post",
            data: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        });
        return response;
    }
});