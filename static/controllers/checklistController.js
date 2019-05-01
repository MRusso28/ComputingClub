qccApp.controller("ChecklistController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {

    $scope.loadChecklists = function(){
        $http.get("/checklist")
            .then(function (result) {
                console.log(result.data);
                $scope.checklists = result.data;

            }, function (error) {
                console.log(error);
            });
    };

    $scope.$on('$viewContentLoaded', function(){
        $scope.loadChecklists();
        console.log("hi");
    });
}]);
