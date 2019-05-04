qccApp.controller("UpdateChecklistController", ["$scope", "$location", "$window", "$http", "Auth", function ($scope, $location, $window, $http, Auth) {

    var checklist = JSON.parse(sessionStorage.getItem("checklistToChange"));
    console.log(checklist);
    $scope.name = checklist.title
    $scope.tasks = '';

    for(var i = 0; i < checklist.tasks.length; i++){
      $scope.tasks += checklist.tasks[i] + ', ';


    }


    if(checklist.completed == false){
      var complete = "false";
    } else{
      var complete = "true";
    }
    $('#complete').val(complete);

    $scope.updateChecklist = function(){
      if ($('#checklistName').val() == '' || $('#checklistTasks').val() == '') {
        alert("Please make sure all parts filled out!");
        $location.reload();
      } else {
      var tasksText = $scope.tasks.split(', ');
      var updatedChecklist = {
          title: $scope.name,
          tasks: tasksText,
          completed: $('#complete').val()
      };

      console.log($scope.name + "------");

      var data = {
        searchCriteria: checklist,
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
}

    $scope.goToChecklist = function(){
        $location.path("/checklist");
    }
    $scope.goToEvents = function(){
        $location.path("/events");
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
