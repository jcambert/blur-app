/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.typography', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.typography', {
                url: '/typography',
                templateUrl: appConfig.templatePagesDirectory + '/ui/typography/typography.html',
                title: 'Typography',
                sidebarMeta: {
                    order: 0,
                },
            });
    }

})();