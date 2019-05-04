qccApp.controller("AddCareerResourceController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {

    $scope.addResource = function(){
        var resource = {
            name: $('#resourcename').val(),
            link: $('#link').val(),
            desc: $('#desc').val(),
            showDesc: false
        };

        $http.post("/careerResource", resource)
        .then(function(result){
            console.log(result);
            $location.path("/careerResource");
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
