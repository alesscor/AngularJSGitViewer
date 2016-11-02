// RepoController.js
(function(){
  var app=angular.module("githubViewer");

  var RepoController=function(
        $scope,github,$routeParams){

    var onRepoComplete=function(data){
      $scope.repo=data;
      $scope.user=data.owner;
      $scope.repo.repoCollaborators=data.repoCollaborators;

    };

    var onCollaboratorsComplete=function(data){
      $scope.repo.repoCollaborators=data;
    };

    var onRepoError=function(reason){
      $scope.error="Could not fetch the repository";
    };
    var onCollaboratorsError=function(reason){
      $scope.error="Could not fetch the repository's collaborators";
    };

    var username=$routeParams.username;
    var reponame=$routeParams.reponame;
    github.getRepoDetails(username,reponame).then(onRepoComplete,onRepoError);
  };

  app.controller("RepoController",RepoController);

}());