qccApp.controller("AddEventController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {

    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;

    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

    $scope.addEvent = function(){
        var event = {
            name: $scope.name,
            headline: $scope.headline,
            desc: $scope.desc,
            datetime: $scope.datetime,
            location: $scope.location,
            showDesc: false
        };

        $http.post("/events", event)
        .then(function(result){
            console.log(result);
            $location.path("/events");
        },
        function(err){
            console.log(err);
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
