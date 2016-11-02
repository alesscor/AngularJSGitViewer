// github.js
(function(){
  var github=function($http){
    var getUser=function(username){
      // returning a promise
      return $http.get("https://api.github.com/users/"+username)
                  .then(function(response){
                      return response.data;
                    }
                  );
    };
    var getRepositoriesSet=function(user){
      // returning a promise
      return $http.get(user.repos_url)
                  .then(function(response){
                      return response.data;
                    }
                  );
    };
    var getRepoDetails=function(username,reponame){
      // returning three promises
      var repo;
      return $http.get("https://api.github.com/repos/"+username+"/"+reponame)
                  .then(function(response){
                    repo=response.data;
                    return $http.get(repo.stargazers_url);
                    })
                  .then(function(response){
                     repo.repoCollaborators=response.data;
                     return repo;
                    });
    };
    var getRepoCollaborators=function(repo){
      // returning a promise
      return $http.get(repo.stargazers_url)
                  .then(function(response){
                      return response.data;
                    }
                  );
    };
    return {
      getUser:getUser,
      getRepositories:getRepositoriesSet,
      getRepoDetails:getRepoDetails,
      getRepoCollaborators:getRepoCollaborators
    };
  };

  var module=angular.module("githubViewer");
  // registers the service in angular:
  module.factory("github",github);

}());