qccApp.factory("Auth", ["$http","$q","$window", function ($http, $q, $window) {
    var userInfo;

    function login(currUser) {
        var deferred = $q.defer();

        var data = {user: currUser}

        $http.post("/students/auth/login", data)
            .then(function (result) {
                userInfo = {
                    accessToken: result.data.user.token,
                    email: result.data.user.email,
                    officer: result.data.user.officer,
                    approved: result.data.user.approved
                };
                $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
                deferred.resolve(userInfo);
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    }

    function apply(newUser){
        var deferred = $q.defer();

        var data = {user: newUser}

        $http.post("/students/auth", data)
            .then(function (result) {
                console.log(result);
                userInfo = {
                    accessToken: result.data.user.token,
                    email: result.data.user.email,
                    officer: result.data.user.officer,
                    approved: result.data.user.approved
                };
                $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
                deferred.resolve(userInfo);
            }, function (error) {
                deferred.reject(error);
            });

        return deferred.promise;
    }

    function signout() {
        var deferred = $q.defer();

        $http({
            method: "POST",
            url: "/students/auth/signout",
            headers: {
                "access_token": userInfo.accessToken
            }
        }).then(function (result) {
            userInfo = null;
            $window.sessionStorage["userInfo"] = null;
            deferred.resolve(result);
        }, function (error) {
            userInfo = null;
            $window.sessionStorage["userInfo"] = null;
            deferred.reject(error);
        });

        return deferred.promise;
    }

    function getUserInfo() {
        return userInfo;
    }

    function init() {
        if ($window.sessionStorage["userInfo"]) {
            userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
    }
    init();

    return {
        login: login,
        signout: signout,
        apply: apply,
        getUserInfo: getUserInfo
    };
}]);
