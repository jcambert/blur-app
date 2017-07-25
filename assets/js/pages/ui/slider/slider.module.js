/**
 * @author a.demeshko
 * created on 12/22/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.ui.slider', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('ui.slider', {
                url: '/slider',
                templateUrl: appConfig.templatePagesDirectory + '/ui/slider/slider.html',
                title: 'Sliders',
                sidebarMeta: {
                    order: 1000,
                },
            });
    }

})();