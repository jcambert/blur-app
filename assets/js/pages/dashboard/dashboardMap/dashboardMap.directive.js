/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('dashboardMap', dashboardMap);

    /** @ngInject */
    function dashboardMap(appConfig) {
        return {
            restrict: 'E',
            controller: 'DashboardMapCtrl',
            templateUrl: appConfig.templatePagesDirectory + '/dashboard/dashboardMap/dashboardMap.html'
        };
    }
})();