

myApp.controller('myCtrlForm', ['$scope','$http',function($scope,$http) {
              var tableData = [];
              
              //  $scope.imageFunction = function(){
              //  	imgName = $("#myimage").val().replace(/^C:\\fakepath\\/, "");
        	     // $scope.mysrc = imgName ;
        	     // $scope.paraHide = false ;
              //     }
             $scope.submitData = function() {
        	console.log("in fun");
                   sendData = {
                    name : $scope.myName , 
                    phone : $scope.myPhone
                   };


                   console.log(sendData);


                  $http({
                  method : "POST",
                    url : "http://localhost:2900/create",
                   data : sendData
            }).then(function mySuccess(response) {
             console.log("good");
            }, function myError(response) {
            	console.log(response);
            // $scope.myWelcome = response.statusText;
            });
              // post data to server mongo db               
            


               $scope.myName = "";
               $scope.myPhone = "";
             // $state.go('createform');
        }
}]);