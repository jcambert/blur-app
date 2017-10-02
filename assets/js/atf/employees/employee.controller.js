angular.module('Employee')
.controller('employeeListController', ['$scope', '$state','modal','toastr', 'employees','Employee', function($scope, $state,modal,toastr, employees,Employee) {
    $scope.employees = employees;
    $scope.remove = function(o){
        modal.open('presence/employee.delete.html',{controller:'employeeDeleteController',resolve:{employee:$scope.employees[o.index]}},
            function ok(employee){
                employee.$delete(
                    function(resp){
                        toastr.success(employee.username + ' a été supprimé');
                    },
                function(resp){
                    toastr.error(resp);
                })
            },
            function cancel(){}
        );
    }

    $scope.add = function(o){
        modal.open('presence/employee.add.html',{controller:'employeeAddController',resolve:{employee:new Employee()}},
            function ok(employee){
                employee.$save(
                    function(resp){
                        toastr.success(employee.username + ' a été ajouté');
                    },
                function(resp){
                    toastr.error(resp);
                })
            },
            function cancel(){}
        );
    }
}])

.controller('employeeDeleteController',['$scope','$uibModalInstance','employee',function($scope,$uibModalInstance,employee){
    $scope.employee = employee;
    $scope.ok = function(){$uibModalInstance.close();}
    $scope.cancel = function(){$uibModalInstance.dismiss();}
}])

.controller('employeeAddController',['$scope','$uibModalInstance','employee',function($scope,$uibModalInstance,employee){
    $scope.employee = employee;
    $scope.ok = function(){$uibModalInstance.close($scope.employee);}
    $scope.cancel = function(){$uibModalInstance.dismiss();}
}])

.controller('employeeDetailController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
    $scope.employee = $scope.employees[$stateParams.id]
}])

.controller('EmployeeEditController',['$scope','employee',function($scope,employee){
    $scope.employee=employee;
}])

.controller('EmployeeAddController',['$scope','employee',function($scope,employee){
    $scope.employee=employee;
}])

;