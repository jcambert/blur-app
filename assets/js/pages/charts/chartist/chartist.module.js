/**
 * @author a.demeshko
 * created on 12/17/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.charts.chartist', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('charts.chartist', {
                url: '/chartist',
                templateUrl: appConfig.templatePagesDirectory + '/charts/chartist/chartist.html',
                title: 'Chartist',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();