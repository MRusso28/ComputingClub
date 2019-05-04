qccApp.controller("OfficersController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {


    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;

    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

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
    $scope.signout = function(){
        Auth.signout().then(function(result){
            $location.path("/");
        },
        function(err){
            $location.path("/");
        });
    };

}]);
