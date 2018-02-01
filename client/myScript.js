var myApp = angular.module('myApp1', ['ui.router']);

myApp.controller('myCtrlIndex', ['$scope',function($scope) {

}]);

myApp.config(function($stateProvider) {
  $stateProvider
  // .state("createform", {
  //     url: "/create",
  //     templateUrl: "create.html",
  //     controller: 'myCtrlForm'
  //   })
    .state('createform', {
  templateUrl:'create.html',
  //controller:'myCtrlForm',
})
  .state('viewform', {
      url: "/form",
      templateUrl: "viewTable.html",
      //controller: 'myTableCtrl'
    })
});
