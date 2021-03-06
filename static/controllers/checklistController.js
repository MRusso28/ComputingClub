qccApp.controller("ChecklistController", ["$scope", "$location", "$window", "$http","Auth", function ($scope, $location, $window, $http, Auth) {

    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;

    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

    $scope.loadChecklists = function(){
        $http.get("/checklist")
            .then(function (result) {
                //console.log(result.data);
                $scope.checklists = result.data;

            }, function (error) {
                console.log(error);
            });
    };

    $scope.deleteChecklist = function(checklist){
      if (confirm('Are you sure you want to delete this checklist?')) {
        $http.defaults.headers.delete = {"Content-Type": "application/json;charset=utf-8" };
          console.log(checklist);
          $http.delete("/checklist", {data: checklist})
              .then(function (result) {
                  console.log(result);
              }, function (error) {
                  console.log(error);
              });
          location.reload();
      } else {
      }
    };

    $scope.deleteEvent = function(event){
           $http.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };//NEED THIS
           console.log(event);
           $http.delete("/events", {data: event})//NEED THIS FORMAT TOO
           .then(function(result){
               console.log(result);
               $scope.loadEvents();
           }, function(error){
               console.log(error);
           });
       };

    $scope.editChecklist = function(checklist){
       sessionStorage.setItem("checklistToChange", JSON.stringify(checklist));
            console.log(checklist);
           $location.path("/updateChecklist");
       };

    $scope.$on('$viewContentLoaded', function(){
        $scope.loadChecklists();
    });

    $scope.goToAddChecklist = function(){
        $location.path("/addChecklist");
    }
    $scope.goToEvents = function(){
        $location.path("/events");
    }
    $scope.goToIndex = function(){
        $location.path("/index");
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
