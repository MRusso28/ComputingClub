qccApp.controller("EventsController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {


    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;

    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

    console.log('approved: ' + $scope.approvedBtns);


    $scope.loadEvents = function(){
        $http.get("/events")
            .then(function (result) {
                console.log(result.data);
                $scope.events = result.data;

            }, function (error) {
                console.log(error);
            });


            $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
            $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
            //console.log($scope.adminBtns);


    };

    $scope.editEvent = function(event){
        sessionStorage.setItem("eventToChange", JSON.stringify(event));
        $location.path("/modifyEvent");
    };

    $scope.deleteEvent = function(event){
        if (confirm('Are you sure you want to delete this event?')) {
            $http.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };
        console.log(event);
        $http.delete("/events", {data: event})
        .then(function(result){
            console.log(result);
            $scope.loadEvents();
        }, function(error){
            console.log(error);
        });
          } else {
          }
        
    };

    $scope.signout = function(){

        Auth.signout().then(function(result){
            $location.path("/");
        },
        function(err){
            $location.path("/");
        });


    };

    $scope.toggleEventDesc = function(event){

        var updatedEvent = {
            name: event.name,
            headline: event.headline,
            desc: event.desc,
            datetime: event.datetime,
            location: event.location,
            showDesc: event.showDesc
        }

        updatedEvent.showDesc = !event.showDesc;

        var data = {
            searchCriteria: event,
            newData: updatedEvent
        }

        $http.put("/events", data)
        .then(function (result) {
            console.log(result);
            $scope.loadEvents("/events");

        }, function (error) {
            console.log(error);
        });


    }

    $scope.$on('$viewContentLoaded', function() {
        $scope.loadEvents();

    });

    $scope.goToAddEvent = function(){
        $location.path("/addEvent");
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
