/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('trafficChart', trafficChart);

    /** @ngInject */
    function trafficChart(appConfig) {
        return {
            restrict: 'E',
            controller: 'TrafficChartCtrl',
            templateUrl: appConfig.templatePagesDirectory + '/dashboard/trafficChart/trafficChart.html'
        };
    }
})();