qccApp.controller("ApplyController", ["$scope", "$location", "$window", function ($scope, $location, $window) {
    $scope.sendApplication = function(){
        $scope.newUser = {
            name: $('#firstname').val() + ' ' + $('#lastname').val(),
            gradYear: $('#gradYear').val(),
            email: $('#email').val(),
            password: $('#password').val()

        }
        console.log($scope.newUser);
    }
}]);