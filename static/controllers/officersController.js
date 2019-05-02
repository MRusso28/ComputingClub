qccApp.controller("OfficersController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {

    $scope.loadStudents = function(){
        $http.get("/students")
            .then(function (result) {
                console.log(result.data);
                $scope.students = result.data;

            }, function (error) {
                console.log(error);
            });


    };

    $scope.toggleSudentDesc = function(event){

        var updatedStudents = {
            name: student.name,
            gradYear: student.gradYear,
            email: student.email,

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
