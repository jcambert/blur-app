/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.grid', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.grid', {
                url: '/grid',
                templateUrl: appConfig.templatePagesDirectory + '/ui/grid/grid.html',
                title: 'Grid',
                sidebarMeta: {
                    order: 400,
                },
            });
    }

})();