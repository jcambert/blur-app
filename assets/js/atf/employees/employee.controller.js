angular.module('Employee')
.controller('employeeListController', ['$scope', '$state', 'employees', function($scope, $state, employees) {
    $scope.employees = employees;
    $scope.detail = function($event, to, params) {

        // If the command key is down, open the URL in a new tab
        if ($event.metaKey) {
            var url = $state.href(to, params, { absolute: true });
            window.open(url, '_blank');

        } else {
            $state.go(to, params);
        }

    };
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