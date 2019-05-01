qccApp.controller("CareerResourceController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {

    $scope.loadResources = function(){
        $http.get("/careerResource")
            .then(function (result) {
                console.log(result.data);
                $scope.resource = result.data;

            }, function (error) {
                console.log(error);
            });


    };

    $scope.toggleResourceDesc = function(event){

        var updatedResource = {
            name: resource.name,
            desc: resource.desc,
            link: resource.link
        }

        updatedResource.showDesc = !resource.showDesc;

        var data = {
            searchCriteria: resource,
            newData: updatedResource
        }

        $http.put("/careerResource", data)
        .then(function (result) {
            console.log(result);
            $scope.loadResources("/careerResource");

        }, function (error) {
            console.log(error);
        });


    }

    $scope.$on('$viewContentLoaded', function() {
        $scope.loadResources();
        console.log("load");
    });

    $scope.goToAddResource = function(){
        $location.path("/addResource");
    }
}]);
