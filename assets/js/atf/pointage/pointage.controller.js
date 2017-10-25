angular.module('Pointage')
.controller('pointageController', ['$scope', '$rootScope', '$state', 'modal', 'toastr','Employee', function($scope, $rootScope, $state, modal, toastr,Employee) {
//$scope.employee = undefined;
$scope.badge=10;
$scope.$watch(function(){return  $scope.badge;}, function(newValue, oldValue) {
    // access new and old value here
    console.dir(newValue);
    Employee.bybadge({badge:newValue},
        function(res){
            console.dir(res);
            $scope.employee =  res.data;
        },function(err){
            console.dir(err);
            toastr.error(err.error);
        })
  },true);
  
}])

;