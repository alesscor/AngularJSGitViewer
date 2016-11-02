// app.js
// Here you define the application
(function(){
  var app=angular.module("githubViewer",["ngRoute"]);
  app.config(function($routeProvider,$locationProvider){
    $routeProvider
      .when("/main",{
        templateUrl:"main.html",
        controller:"MainController"
      })
      .when("/user/:username",{
        templateUrl:"user.html",
        controller:"UserController"
      })
      .when("/repo/:username/:reponame",{
        templateUrl:"repo.html",
        controller:"RepoController"
      })
      .otherwise({redirectTo:"/main"});
      // use the HTML5 History API
      // as recommended in https://scotch.io/tutorials/pretty-urls-in-angularjs-removing-the-hashtag
      // but regarding the observation in http://stackoverflow.com/a/32620370/3802741
      // refer to web.config file
      $locationProvider.html5Mode(true);
  });

}());