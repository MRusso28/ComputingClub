qccApp.controller("IndexController", ["$scope", "$location", "$window", "Auth",  function ($scope, $location, $window, Auth) {
    $scope.userInfo = null;
    $scope.applyForMembership = function(){
        $location.path("/apply");

    };
    $scope.login = function(){
        $location.path("/login");
    };
    $scope.signout = function(){
        Auth.signout();
        $location.path("/");
    };
    $scope.goToEvents = function(){
        $location.path("/events");
    }
}]);