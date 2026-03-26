app.service("service", function ($http) {


    this.saveUserService = function (data, id) {
        var response = $http({
            url: "/SystemView/SaveUser",
            method: "post",
            data: {
                user_data: data,
                id: id
            },
            headers: { "Content-Type": "application/json" }
        });
        return response;
    }
});