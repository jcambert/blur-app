/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('Presence')
        .controller('presenceListController', ['$scope', '$state', 'employees', function($scope, $state, employees) {
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

    .controller('presenceDetailController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
        $scope.employee = $scope.employees[$stateParams.id]
    }])

    ;

})();