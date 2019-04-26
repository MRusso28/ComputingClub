qccApp.controller("AddEventController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {
    
    $scope.addEvent = function(){
        var event = {
            name: $('#eventname').val(),
            headline: $('#headline').val(),
            desc: $('#desc').val(),
            datetime: $('#datetime').val(),
            location: $('#location').val(),
            showDesc: false
        };
        
        $http.post("/events", event)
        .then(function(result){
            console.log(result);
        }, 
        function(err){
            console.log(err);
        });
    }
}]);