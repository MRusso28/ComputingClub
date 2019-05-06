qccApp.controller("CareerResourceController", ["$scope", "$location", "$window", "$http", "Auth", function($scope, $location, $window, $http, Auth) {

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


  $scope.loadResources = function() {
    $http.get("/careerResource")
      .then(function(result) {
        console.log(result.data);
        $scope.resource = result.data;

      }, function(error) {
        console.log(error);
      });
  };

  $scope.updateResource = function(resource){
    sessionStorage.setItem("resourceToChange", JSON.stringify(resource));
    $location.path("/modifyCareerResource");
};


  $scope.deleteResource = function(resource){
    if (confirm('Are you sure you want to delete this resource?')) {
      $http.defaults.headers.delete = { "Content-Type": "application/json;charset=utf-8" };//NEED THIS
      console.log(resource);
      $http.delete("/careerResource", {data: resource})//NEED THIS FORMAT TOO
      .then(function(result){
          console.log(result);
          $scope.loadResources();
      }, function(error){
          console.log(error);
      });
    } else {
    }

  };

  $scope.toggleResourceDesc = function(event) {

    var updatedResource = {
      name: resource.name,
      desc: resource.desc,
      link: resource.link
    }

    updatedResource.showDesc = !resource.showDesc;

    var data = {
      searchCriteria: resource,
      newData: updatedResource
    }

    $http.put("/careerResource", data)
      .then(function(result) {
        console.log(result);
        $scope.loadResources("/careerResource");

      }, function(error) {
        console.log(error);
      });

  }

  $scope.$on('$viewContentLoaded', function() {
    $scope.loadResources();
    console.log("load");
  });

  $scope.goToAddResource = function() {
    $location.path("/addResource");
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
