/**
 * @author v.lugovsky
 * created on 23.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.panels', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.panels', {
                url: '/panels',
                templateUrl: appConfig.templatePagesDirectory + '/ui/panels/panels.html',
                controller: 'NotificationsPageCtrl',
                title: 'Panels',
                sidebarMeta: {
                    order: 1100,
                },
            });
    }

})();