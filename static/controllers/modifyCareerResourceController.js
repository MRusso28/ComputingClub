qccApp.controller("ModifyCareerResourceController", ["$scope", "$location", "$window", "$http", function ($scope, $location, $window, $http) {

    if(JSON.parse(sessionStorage.getItem("userInfo")) == null){
        $scope.adminBtns = false;
        $scope.approvedBtns = false;
        $scope.loggedIn = false;

    }else{
        $scope.adminBtns = JSON.parse(sessionStorage.getItem("userInfo")).officer;
        $scope.approvedBtns = JSON.parse(sessionStorage.getItem("userInfo")).approved;
        $scope.loggedIn = true;

    }

    var resource = JSON.parse(sessionStorage.getItem("resourceToChange"));
    $('#resourcename').val(resource.name);
    $('#link').val(resource.link);
    $('#desc').val(resource.desc);

    $scope.updateResource = function(){
        var updatedResource = {
            name: $('#resourcename').val(),
            link: $('#link').val(),
            desc: $('#desc').val(),
            showDesc: false
        }

        var data = {
            searchCriteria: resource,
            newData: updatedResource
        }

        $http.put("/careerResource", data)
        .then(function(result){
            console.log(result);
            $location.path("/careerResource");
        }, function(err){
            console.log(error);
        });
    }



}]);
