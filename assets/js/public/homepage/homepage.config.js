(function() {
    'use strict';

    angular.module('HomePageApplication')
        .config(['$stateProvider', '$urlRouterProvider', 'appConfig', function config($stateProvider, $urlRouterProvider, appConfig) {
            $stateProvider
                .state('homepage', {
                    abstract: true,
                    url: '/homepage',
                    template: '<ui-view></ui-view>'
                })
                .state('homepage.main', {
                    url: '/main',
                    templateUrl: appConfig.templateDirectory + '/homepage.tpl.html'
                })
                .state('homepage.login', {
                    url: '/login',
                    templateUrl: appConfig.templateDirectory + '/login.tpl.html'
                })
                .state('homepage.register', {
                    url: '/register',
                    templateUrl: appConfig.templateDirectory + '/register.tpl.html'
                });
            $urlRouterProvider.otherwise(function($injector, $location) {
                var $state = $injector.get('$state');

                $state.go('homepage.main', {});
            });
        }]);







})();