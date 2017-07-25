/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('weather', weather);

    /** @ngInject */
    function weather(appConfig) {
        return {
            restrict: 'EA',
            controller: 'WeatherCtrl',
            templateUrl: appConfig.templatePagesDirectory + '/dashboard/weather/weather.html'
        };
    }
})();