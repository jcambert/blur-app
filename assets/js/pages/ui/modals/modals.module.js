/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.modals', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.modals', {
                url: '/modals',
                templateUrl: appConfig.templatePagesDirectory + '/ui/modals/modals.html',
                controller: 'ModalsPageCtrl',
                title: 'Modals',
                sidebarMeta: {
                    order: 300,
                },
            });
    }

})();