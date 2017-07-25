/**
 * @author a.demeshko
 * created on 1/12/16
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.components.timeline', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('components.timeline', {
                url: '/timeline',
                templateUrl: appConfig.templatePagesDirectory + '/components/timeline/timeline.html',
                title: 'Timeline',
                sidebarMeta: {
                    icon: 'ion-ios-pulse',
                    order: 100,
                },
            });
    }
})();