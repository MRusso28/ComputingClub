qccApp.controller("AddChecklistController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {

    $scope.addChecklist = function(){
      if ($('#checklistname').val() == '' || $('#checklistTasks').val() == '') {
        alert("Please make sure all parts filled out!")
        $location.reload();
      } else {
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
            $location.path('/checklist');
        },
        function(err){
            console.log(err);
        });
    }
}

    $scope.goToChecklist = function(){
        $location.path("/checklist");
    }
    $scope.goToEvents = function(){
        $location.path("/events");
    }
}]);
