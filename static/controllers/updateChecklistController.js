qccApp.controller("UpdateChecklistController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {

    var checklist = JSON.parse(sessionStorage.getItem("checklistToChange"));
    $('#checklistName').val(checklist.title);
    $('#checklistTasks').val(checklist.tasks.join(', '));

    if(checklist.completed == false){
      var complete = "false";
    } else{
      var complete = "true";
    }
    $('#complete').val(complete);

    $scope.updateChecklist = function(){
      var tasksText = $('#checklistTasks').val().split(', ');
      var updatedChecklist = {
          title: $('#checklistName').val(),
          tasks: tasksText,
          completed: $('#complete').val()
      };

      var data = {
        searchCriteria: checklist.title,
        newData: updatedChecklist
      }

        $http.put("/checklist", data)
        .then(function(result){
            console.log(result);
            $location.path("/checklist");
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
