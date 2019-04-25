qccApp.controller("IndexController", ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.userInfo = null;
    $scope.applyForMembership = function(){
        $location.path("/apply");
    };
    $scope.login = function(){
        $location.path("/login");
    }
}]);