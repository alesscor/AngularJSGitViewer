// MainController.js
(function(){
  var app=angular.module("githubViewer");

  var MainController=function(
        $scope,$interval,$location){

    var decrementCountdown=function(){
      $scope.countdown--;
      if($scope.countdown<1){
        $scope.search($scope.username);
      }
    };

    var countdownInterval=null;
    var startCountdown=function(){
      countdownInterval=$interval(decrementCountdown, 1000, $scope.countdown);
    };


    $scope.search=function(username){
      if(countdownInterval){
        // it cancels the count down if user
        // searched before it gets 0.
        $interval.cancel(countdownInterval);
        $scope.countdown=null;
      }
      // @todo
      $location.path("/user/"+username);
    };

    $scope.username="angular";
    $scope.countdown=5;
    startCountdown();
  };

  app.controller("MainController",MainController);

}());