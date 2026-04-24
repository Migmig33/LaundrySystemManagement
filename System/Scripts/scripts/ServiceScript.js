app.service("service", function ($http) {

    this.loginAuthService = function (data) {
        var response = $http({
            url: "/SystemView/LoginAuth",
            method: "post",
            data: data,
            headers: {"Content-Type": "application/json"}
        })
        return response;
    }
    this.saveUserService = function (data, id) {
        var response = $http({
            url: "/SystemView/SaveCustomers",
            method: "post",
            data: {
                userData: data,
                id: id
            },
            headers: { "Content-Type": "application/json" }
        })
        return response;

    }
    this.saveOrderService = function (data, id) {
        var response = $http({
            url: "/SystemView/SaveOrders",
            method: "post",
            data: {
                order_data: data,
                id: id
            },
            headers: {"Content-Type": "application/json" }
        })
        return response;
    }
    this.saveServiceTypeService = function (data, id) {
        var response = $http({
            url: "/SystemView/SaveServices",
            method: "post",
            data: {
                service_data: data,
                id: id
            },
            headers: {"Content-Type": "application/json"}
        })
        return response;
    }
    this.saveFeedbackService = function (data, id) {
        var response = $http({
            url: "/SystemView/SaveFeedbacks",
            method: "post",
            data: { 
                feedback_data: data,
                id: id
            },
            headers: {"Content-Type": "application/json"}
        })
        return response;
    }

    this.deleteUserService = function (id) {
        
        var response = $http({
            url: "/SystemView/DeleteUser",
            method: "post",
            data: {data: id},
            headers: {"Content-Type": "application/json"}
        })
        return response;
    }
    this.deleteOrderService = function (id) {
        alert(id)
        var response = $http({
            url: "/SystemView/DeleteOrder",
            method: "post",
            data: {data: id},
            headers: { "Content-Type": "application/json" }
        })
        return response;
    }
    this.deleteServiceTypeService = function (id) {
        var response = $http({
            url: "/SystemView/DeleteService",
            method: "post",
            data: { data: id },
            headers: {"Content-Type": "application/json"}
        })
        return response;
    }
    this.getUserDataService = function () {
        return $http.get("/SystemView/GetCustomers");
    }

    this.getOrdersDataService = function () {
        return $http.get("/SystemView/GetOrders");
    }
    this.getServicesDataService = function () {
        return $http.get("/SystemView/GetServices");
    }
    this.getFeedbackDataService = function () {
        return $http.get("/SystemView/GetFeedbacks");
    }

});