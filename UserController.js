// UserController.js
(function(){
  var app=angular.module("githubViewer");

  var UserController=function(
        $scope,github,$routeParams){

    var onUserComplete=function(data){
      $scope.user=data;
      github.getRepositories($scope.user)
            .then(onRepositoriesComplete,onRepositoryError);
    };

    var onRepositoriesComplete=function(data){
      $scope.user.repositoriesSet=data;
    };

    var onUserError=function(reason){
      $scope.error="Could not fetch the user";
    };
    var onRepositoryError=function(reason){
      $scope.error="Could not fetch the user's repositories";
    };

    $scope.username=$routeParams.username;
    $scope.repoSortOrder="-stargazers_count";
    github.getUser($scope.username).then(onUserComplete,onUserError);
  };

  app.controller("UserController",UserController);

}());