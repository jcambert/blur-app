/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.profile', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('profile', {
                url: '/profile',
                title: 'Profile',
                templateUrl: appConfig.templatePagesDirectory + '/profile/profile.html',
                controller: 'ProfilePageCtrl',
            });
    }

})();