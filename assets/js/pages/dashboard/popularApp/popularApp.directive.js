/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('popularApp', popularApp);

    /** @ngInject */
    function popularApp(appConfig) {
        return {
            restrict: 'E',
            templateUrl: appConfig.templatePagesDirectory + '/dashboard/popularApp/popularApp.html'
        };
    }
})();