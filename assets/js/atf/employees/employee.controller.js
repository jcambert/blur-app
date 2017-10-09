angular.module('Employee')
    .controller('employeeListController', ['$scope', '$rootScope', '$state', 'modal', 'toastr', 'employees', 'Employee', function($scope, $rootScope, $state, modal, toastr, employees, Employee) {
        console.dir(employees);
        $rootScope.$on('$sailsResourceCreated', function(event, message) {

            if (message.model == 'employee') {
                var model = _.find($scope.employees, function(e) { return e.id == message.id; });

                console.dir(message);
                toastr.success(model.firstname + ' ' + model.lastname + ' a été creer');
            }

        });
        $rootScope.$on('$sailsResourceDestroyed', function(event, message) {
            if (message.model == 'employee') {
                var model = _.find($scope.employees, function(e) { return e.id == message.id; });
                console.dir(message);
                // var employee = message.data;
                toastr.success(model.firstname + ' ' + model.lastname + ' a été supprimé');
            }
            console.dir(message);
        });
        $rootScope.$on('$sailsResourceUpdated', function(event, message) {
            if (message.model == 'employee') {
                var model = _.find($scope.employees, { 'id': message.id });
                console.dir(message);
                //var employee = message.data;
                var msg = model.firstname + ' ' + model.lastname + ' a été modifié';
                if (angular.isDefined(message.data.lock) && angular.isObject(message.data.lock))
                    if (message.data.lock.lock)
                        msg = model.firstname + ' ' + model.lastname + ' a été bloqué par ' + message.data.lock.lockby;
                    else if (!message.data.lock.lock)
                    msg = model.firstname + ' ' + model.lastname + ' a été débloqué par ' + message.data.lock.lockby;
                $scope.$apply();
                toastr.success(msg);
            }
        });
        $scope.employees = employees;
        $scope.remove = function(o) {
            console.dir(o);
            modal.open('presence/employee.delete.html', { controller: 'employeeDeleteController', resolve: { employee: $scope.employees[o.index] } },
                function ok(employee) {
                    employee.$delete(
                        function(resp) {
                            // toastr.success(employee.firstname + ' ' + employee.lastname + ' a été supprimé');
                        },
                        function(resp) {
                            toastr.error(resp);
                        })
                },
                function cancel() {}
            );
        };

        $scope.add = function(o) {
            modal.open('presence/employee.form.html', { controller: 'employeeFormController', resolve: { employee: new Employee() } },
                function ok(employee) {
                    employee.$save(
                        function(resp) {
                            console.dir(resp);
                            if (resp.status)
                                toastr.error(resp.details);
                            // else
                            //     toastr.success(employee.firstname + ' ' + employee.lastname + ' a été ajouté');
                        },
                        function(resp) {
                            toastr.error(resp);
                        })
                },
                function cancel() {}
            );
        };

        $scope.edit = function(o) {
            var employee = $scope.employees[o.index];;
            employee.$lock(function(resp) {
                console.dir(resp);
                modal.open('presence/employee.form.html', { controller: 'employeeFormController', resolve: { employee: employee } },
                    function ok(employee) {
                        employee.$save(
                            function(resp) {
                                console.dir(resp);
                                if (resp.status)
                                    toastr.error(resp.details);
                                // else
                                //   toastr.success(employee.firstname + ' ' + employee.lastname + ' a été modifié');
                                employee.$unlock();
                            },
                            function(resp) {
                                toastr.error(resp);
                                employee.$unlock();
                            })
                    },
                    function cancel() {
                        employee.$unlock();
                    }
                );
            });

        }
    }])

.controller('employeeDeleteController', ['$scope', '$uibModalInstance', 'employee', function($scope, $uibModalInstance, employee) {
    console.dir(employee);
    $scope.employee = employee;
    $scope.ok = function() { $uibModalInstance.close($scope.employee); }
    $scope.cancel = function() { $uibModalInstance.dismiss(); }
}])

.controller('employeeFormController', ['$scope', '$uibModalInstance', 'employee', function($scope, $uibModalInstance, employee) {
    $scope.employee = employee;
    $scope.mode = employee.id ? 'edit' : 'add';
    $scope.ok = function() { $uibModalInstance.close($scope.employee); }
    $scope.cancel = function() { $uibModalInstance.dismiss(); }
}])

.controller('employeeDetailController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
    $scope.employee = $scope.employees[$stateParams.id]
}])

.controller('EmployeeEditController', ['$scope', 'employee', function($scope, employee) {
    $scope.employee = employee;
}])

.controller('EmployeeAddController', ['$scope', 'employee', function($scope, employee) {
    $scope.employee = employee;
}])

;