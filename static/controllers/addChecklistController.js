qccApp.controller("AddChecklistController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {

    $scope.addChecklist = function(){
        var tasksText = $('#checklistTasks').val().split(', ');
        console.log(tasksText);
        var checklist = {
            title: $('#checklistname').val(),
            tasks: tasksText,
            completed: false
        };
        $http.post("/checklist", checklist)
        .then(function(result){
            console.log(result);
        },
        function(err){
            console.log(err);
        });
    }

    $scope.goToChecklist = function(){
        $location.path("/checklist");
    }
    $scope.goToEvents = function(){
        $location.path("/events");
    }
}]);
