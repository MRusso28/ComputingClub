qccApp.controller("IndexController", ["$scope", "$location", "$window", "Auth",  function ($scope, $location, $window, Auth) {
    
    $scope.load = function(){
        $scope.userInfo = null;
        if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
            $scope.adminBtns = false;
            $scope.approvedBtns = false;
            $scope.loggedIn = false;
            
        }else{
            $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
            $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
            $scope.loggedIn = true;
    
        }
        console.log($scope.loggedIn);

    }

    $scope.applyForMembership = function(){
        $location.path("/apply");

    };
    $scope.login = function(){
        $location.path("/login");
    };
    $scope.signout = function(){
        Auth.signout().then(function(result){
            $location.path("/");
        }, 
        function(err){
            $location.path("/");
        });
    };
    $scope.goToEvents = function(){
        $location.path("/events");
    };
    $scope.$on('$viewContentLoaded', function() {
        $scope.load();
    });
}]);