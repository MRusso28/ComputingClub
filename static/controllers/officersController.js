qccApp.controller("OfficersController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {

    $scope.loadStudents = function(){
        $http.get("/students")
            .then(function (result) {
                console.log(result.data);
                $scope.officers = result.data;

            }, function (error) {
                console.log(error);
            });


    };

    $scope.toggleOfficerDesc = function(event){

        var updatedOfficer = {
            name: officer.name,
            gradYear: officer.gradYear,
            email: officer.email,

        }

        updatedOfficer.showDesc = !event.showDesc;

        var data = {
            searchCriteria: officer,
            newData: updatedOfficer
        }


    }

    $scope.$on('$viewContentLoaded', function() {
        $scope.loadStudents();
    });

}]);
