/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.buttons', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.buttons', {
                url: '/buttons',
                templateUrl: appConfig.templatePagesDirectory + '/ui/buttons/buttons.html',
                controller: 'ButtonPageCtrl',
                title: 'Buttons',
                sidebarMeta: {
                    order: 100,
                },
            });
    }

})();