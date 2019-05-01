qccApp.controller("LoginController", ["$scope", "$location", "$window", "Auth", function ($scope, $location, $window, Auth) {
    
    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;
        
    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }
    $scope.login = function(){
        $scope.currUser = {
            email: $('#email').val(),
            password: $('#password').val()
        }
        //console.log($scope.newUser);
        Auth.login($scope.currUser)
        .then(function(result){
            console.log($window.sessionStorage["userInfo"]);
            $location.path('/');

        }, function(error){
            alert('Invalid Login');
        });
    };
}]);