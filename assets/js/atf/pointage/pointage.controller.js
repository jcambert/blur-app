angular.module('Pointage')
.controller('pointageController', ['$scope', '$rootScope', '$state', 'modal', 'toastr','Employee', function($scope, $rootScope, $state, modal, toastr,Employee) {
$scope.employee = undefined;
   $scope.retrieve = function(){
    Employee.bybadge({badge:$scope.badge},
        function(res){
            console.dir(res);
            $scope.employee =  res.data;
        },function(err){
            toastr.error(err);
        })
   }
}])

;