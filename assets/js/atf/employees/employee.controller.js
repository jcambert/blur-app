angular.module('Employee')
.controller('employeeListController', ['$scope', '$rootScope', '$state','modal','toastr', 'employees','Employee', function($scope, $rootScope, $state,modal,toastr, employees,Employee) {
    
    $rootScope.$on('$sailsResourceAddedTo',function(event,message){
        console.dir(message);
    });
    $rootScope.$on('$sailsResourceRemovedFrom',function(event,message){
        console.dir(message);
    });
    $scope.employees = employees;
    $scope.remove = function(o){
        modal.open('presence/employee.delete.html',{controller:'employeeDeleteController',resolve:{employee:$scope.employees[o.index]}},
            function ok(employee){
                employee.$delete(
                    function(resp){
                        toastr.success(employee.firstname+' '+employee.lastname + ' a été supprimé');
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
                        console.dir(resp);
                        if(resp.status==200)
                            toastr.success(employee.firstname+' '+employee.lastname + ' a été ajouté');
                        else    
                            toastr.error(resp.details);
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