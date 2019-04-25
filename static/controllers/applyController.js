qccApp.controller("ApplyController", ["$scope", "$location", "$window", "Auth", function ($scope, $location, $window, Auth) {
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
        }, function(error){

        });

        
    };
}]);