qccApp.controller("ModifyEventController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {

    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;

    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

    var event = JSON.parse(sessionStorage.getItem("eventToChange"));
    $scope.name = event.name;
    $scope.headline = event.headline;
    $scope.desc = event.desc;
    $scope.datetime = event.datetime;
    $scope.location = event.location;

    $scope.updateEvent = function(){
        var updatedEvent = {
            name: $scope.name,
            headline: $scope.headline,
            desc: $scope.desc,
            datetime: $scope.datetime,
            location: $scope.location,
            showDesc: false
        }

        var data = {
            searchCriteria: event,
            newData: updatedEvent
        }

        $http.put("/events", data)
        .then(function(result){
            console.log(result);
            $location.path("/events");
        }, function(err){
            console.log(error);
        });
    }

    $scope.signout = function(){
        Auth.signout().then(function(result){
            $location.path("/");
        },
        function(err){
            $location.path("/");
        });
    };



}]);
