/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.notifications', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.notifications', {
                url: '/notifications',
                templateUrl: appConfig.templatePagesDirectory + '/ui/notifications/notifications.html',
                controller: 'NotificationsPageCtrl',
                title: 'Notifications',
                sidebarMeta: {
                    order: 700,
                },
            });
    }

})();