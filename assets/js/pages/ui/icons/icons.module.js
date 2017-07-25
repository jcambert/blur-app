/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.icons', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.icons', {
                url: '/icons',
                templateUrl: appConfig.templatePagesDirectory + '/ui/icons/icons.html',
                controller: 'IconsPageCtrl',
                title: 'Icons',
                sidebarMeta: {
                    order: 200,
                },
            });
    }

})();