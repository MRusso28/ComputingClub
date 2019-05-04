qccApp.controller("ApplicationController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {


    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;

    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;
    }

    $scope.loadApplications = function(){
        $http.get("/students")
            .then(function (result) {
                console.log(result.data);
                $scope.students = result.data;
            }, function (error) {
                console.log(error);
            });
    };

    $scope.accept = function(student){
        console.log(student);

        var updatedStudent = {
            name: student.name,
            gradYear: student.gradYear,
            email: student.email,
            approved: true
        }
        var data = {
            searchCriteria: student,
            newData: updatedStudent
        }
        $http.put("/students", data)
        .then(function(result){
            console.log(result);
            location.reload();
        }, function(err){
            console.log(error);
        });
    };

    $scope.deny = function(student){
      $http.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };//NEED THIS
      $http.delete("/students", {data: student})//NEED THIS FORMAT TOO
      .then(function(result){
          console.log(result);
          location.reload();
      }, function(error){
          console.log(error);
      });
    };

    $scope.signout = function(){
        Auth.signout().then(function(result){
            $location.path("/");
        },
        function(err){
            $location.path("/");
        });
    };

    $scope.$on('$viewContentLoaded', function() {
        $scope.loadApplications();
    });

}]);
