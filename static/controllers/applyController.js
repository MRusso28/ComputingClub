qccApp.controller("ApplyController", ["$scope", "$location", "$window", "Auth", function ($scope, $location, $window, Auth) {
    
    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;
        
    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }
    
    $scope.sendApplication = function(){
        $scope.newUser = {
            name: $('#firstname').val() + ' ' + $('#lastname').val(),
            gradYear: $('#gradYear').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            approved: false,
            officer: false

        }
        //console.log($scope.newUser);
        Auth.apply($scope.newUser)
        .then(function(result){
            console.log($window.sessionStorage["userInfo"]);
            $location.path('/')
    }, function(error){
        
    });

        
    };
}]);