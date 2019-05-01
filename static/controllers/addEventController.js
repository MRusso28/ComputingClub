qccApp.controller("AddEventController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {
    
    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;
        
    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

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