var qccApp = angular.module("qccApp", ["ngRoute","ngResource"]);

qccApp.config(function ($routeProvider) {
    $routeProvider
        .when("/index",  { controller: "IndexController", 
                      templateUrl: "partials/index.html"
        })
        .when("/", {redirectTo: "/index"})
        .when("/apply", {controller: "ApplyController", templateUrl: "partials/applyMembership.html"})
        .when("/login", {controller: "LoginController", templateUrl: "partials/login.html"})
        //.when("/checklist")
        // .when("/recipes/:recipe_id",  { controller: "ViewRecipeController", templateUrl: "app/partials/view_recipe.html" })
        // .when("/login", {
        //     templateUrl: "app/partials/login.html",
        //     controller: "LoginController" })
        // .when("/", {redirectTo: "/recipes"})
         .otherwise({ redirectTo: "/404_page" });
});
// recipesApp.run(["$rootScope", "$location", function ($rootScope, $location) {

//     $rootScope.$on("$routeChangeSuccess", function (userInfo) {
//         console.log(userInfo);
//     });

//     $rootScope.$on("$routeChangeError", function (event, current, previous, eventObj) {
//         if (eventObj.authenticated === false) {
//             $location.path("/login");
//         }
//     });
// }]);
/*
var MyFancyObservable = require('MyFancyObservable');  
var observable = new MyFancyObservable();

observable.on('hello', function (name) {  
  console.log(name);
});

observable.hello('john');  
*/