qccApp.controller("LoginController", ["$scope", "$location", "$window", "Auth", function ($scope, $location, $window, Auth) {
    $scope.login = function(){
        $scope.currUser = {
            email: $('#email').val(),
            password: $('#password').val()
        }
        //console.log($scope.newUser);
        Auth.login($scope.currUser)
        .then(function(result){
            console.log($window.sessionStorage["userInfo"]);
        }, function(error){
            alert('Invalid Login');
        });

        
    };
}]);