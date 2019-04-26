qccApp.controller("EventsController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {
    
    $scope.loadEvents = function(){
        $http.get("/events")
            .then(function (result) {
                console.log(result.data);
                $scope.events = result.data;
                
            }, function (error) {
                console.log(error);
            });

        
    };

    $scope.toggleEventDesc = function(event){

        console.log(event);

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
}]);