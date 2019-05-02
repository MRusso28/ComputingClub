qccApp.controller("AddCareerResourceController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {

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

}]);
