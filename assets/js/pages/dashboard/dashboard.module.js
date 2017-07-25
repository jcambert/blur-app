/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: appConfig.templatePagesDirectory + '/dashboard/dashboard.html', //'app/pages/dashboard/dashboard.html',
                title: 'Dashboard',
                sidebarMeta: {
                    icon: 'ion-android-home',
                    order: 0,
                },
            });
    }

})();