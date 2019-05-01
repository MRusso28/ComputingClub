qccApp.controller("ModifyEventController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {
    
    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;
        
    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

    var event = JSON.parse(sessionStorage.getItem("eventToChange"));
    $('#eventname').val(event.name);
    $('#headline').val(event.headline);
    $('#desc').val(event.desc);
    $('#datetime').val(event.datetime);
    $('#location').val(event.location);

    $scope.updateEvent = function(){
        var updatedEvent = {
            name: $('#eventname').val(),
            headline: $('#headline').val(),
            desc: $('#desc').val(),
            datetime: $('#datetime').val(),
            location: $('#location').val(),
            showDesc: false
        }

        var data = {
            searchCriteria: event,
            newData: updatedEvent
        }

        $http.put("/events", data)
        .then(function(result){
            console.log(result);
            $location.path("/events");
        }, function(err){
            console.log(error);
        });
    }


    
}]);