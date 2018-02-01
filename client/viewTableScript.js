
myApp.controller('myTableCtrl', function($scope,$http) {
        //console.log(obj1);
        //$scope.td = //data from mongo from server ;
      $scope.init = function() {
       

         $http({
                  method : "GET",
                    url : "http://localhost:2900/view"
            }).then(function mySuccess(response) {
             console.log(response);
             $scope.table = response.data ;
            }, function myError(response) {
            	console.log(response);
            // $scope.myWelcome = response.statusText;
            });
              // post data to server mongo

      }


      });