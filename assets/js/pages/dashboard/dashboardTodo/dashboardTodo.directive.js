/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('dashboardTodo', dashboardTodo);

    /** @ngInject */
    function dashboardTodo(appConfig) {
        return {
            restrict: 'EA',
            controller: 'DashboardTodoCtrl',
            templateUrl: appConfig.templatePagesDirectory + '/dashboard/dashboardTodo/dashboardTodo.html'
        };
    }
})();