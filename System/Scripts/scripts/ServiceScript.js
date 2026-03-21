app.service("service", function ($http) {


    this.saveUserService = function () {
        var response = $http({
            url: "/SystemView/SaveUser",
            method: "post"
        })
        return response;
    }
});