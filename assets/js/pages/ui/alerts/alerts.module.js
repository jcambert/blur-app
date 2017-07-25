/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.alerts', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.alerts', {
                url: '/alerts',
                templateUrl: appConfig.templatePagesDirectory + '/ui/alerts/alerts.html',
                title: 'Alerts',
                sidebarMeta: {
                    order: 500,
                },
            });
    }

})();