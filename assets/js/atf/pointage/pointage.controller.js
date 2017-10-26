angular.module('Pointage')
.controller('pointageController', ['$scope', '$rootScope', '$state', 'modal', 'toastr','Employee','Auth','Presence', function($scope, $rootScope, $state, modal, toastr,Employee,auth,Presence) {
//$scope.employee = undefined;
//$scope.badge=10;
$scope.retrieve = function(){
    delete $scope.employee;
    delete $scope.presences;
    Employee.bybadge({badge:$scope.badge.badge},
        function(res){
            console.dir(res);
            $scope.employee =  res;
            Presence.byemployee({employee:$scope.employee.id},
                function(presences){
                    console.dir(presences);
                    $scope.presences=presences;
                },
                function(err){
                    console.dir(err);
                    toastr.error(err.error);
                })
        },function(err){
            console.dir(err);
            toastr.error(err.error);
        })
}
$scope.badge={};
$scope.table ="pointage/" + ( auth.isAdmin ? "pointage.admin.html" : "pointage.user.html");

/*$scope.$watch('badge.badge', function(newValue, oldValue) {
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
  },true);*/
  
}])

;