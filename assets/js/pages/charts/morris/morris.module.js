/**
 * @author a.demeshko
 * created on 12/18/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.charts.morris', ['BlurAdmin.configuration'])
        .config(routeConfig).config(function(baConfigProvider) {
            var layoutColors = baConfigProvider.colors;
            Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
            Morris.Donut.prototype.defaults.labelColor = layoutColors.defaultText;
            Morris.Grid.prototype.gridDefaults.gridLineColor = layoutColors.borderDark;
            Morris.Grid.prototype.gridDefaults.gridTextColor = layoutColors.defaultText;
        });

    /** @ngInject */
    function routeConfig($stateProvider, appConfig) {
        $stateProvider
            .state('charts.morris', {
                url: '/morris',
                templateUrl: appConfig.templatePagesDirectory + '/charts/morris/morris.html',
                title: 'Morris',
                sidebarMeta: {
                    order: 300,
                }
            });
    }

})();