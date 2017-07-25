/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .directive('blurFeed', blurFeed);

    /** @ngInject */
    function blurFeed(appConfig) {
        return {
            restrict: 'E',
            controller: 'BlurFeedCtrl',
            templateUrl: appConfig.templatePagesDirectory + '/dashboard/blurFeed/blurFeed.html'
        };
    }
})();