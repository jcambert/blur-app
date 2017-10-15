/**
 * Created by Jc Ambert
 */

(function() {
    'use strict';
    angular.module('Presence')
        .config(['$stateProvider', '$urlRouterProvider', 'appConfig', 'baSidebarServiceProvider', function config($stateProvider, $urlRouterProvider, presenceConfig, sidebar) {
            /* $stateProvider
                 .state('presence', {
                     abstract: true,
                     url: '/presence',
                     template: '<div ui-view></div>',
                     title: 'Presence',


                     sidebarMeta: {
                         icon: 'ion-ios-alarm',
                         order: 1,
                     },
                 })
                 .state('presence.list', {
                     //abstract: true,
                     title: 'Liste',
                     url: '/presence',
                     resolve: {
                         presences: ['Presence', 'toastr', function(presence, toastr) {
                             return presence.query();

                         }]
                     },
                     views: {
                         '': {
                             templateUrl: 'presence/presence.html',
                             // title: 'Employee',
                             controller: "presenceListController",
                         }
                     },
                     sidebarMeta: {
                         order: 1,
                     },

                 });
             $urlRouterProvider.when('/presence', '/presence/list');*/
            console.log('Presence Module configured');
        }]);
})();