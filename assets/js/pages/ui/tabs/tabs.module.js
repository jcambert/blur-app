/**
 * @author v.lugovsky
 * created on 21.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.tabs', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.tabs', {
                url: '/tabs',
                templateUrl: appConfig.templatePagesDirectory + '/ui/tabs/tabs.html',
                title: 'Tabs & Accordions',
                sidebarMeta: {
                    order: 800,
                },
            });
    }

})();