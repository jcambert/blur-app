/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.progressBars', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.progressBars', {
                url: '/progressBars',
                templateUrl: appConfig.templatePagesDirectory + '/ui/progressBars/progressBars.html',
                title: 'Progress Bars',
                sidebarMeta: {
                    order: 600,
                },
            });
    }

})();