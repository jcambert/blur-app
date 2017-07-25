/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('dashboardPieChart', dashboardPieChart);

    /** @ngInject */
    function dashboardPieChart(appConfig) {
        return {
            restrict: 'E',
            controller: 'DashboardPieChartCtrl',
            templateUrl: appConfig.templatePagesDirectory + '/dashboard/dashboardPieChart/dashboardPieChart.html'
        };
    }
})();