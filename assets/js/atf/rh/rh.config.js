/**
 * Created by k.danovsky on 13.05.2016.
 */

(function() {
    'use strict';

    angular.module('Rh')
        .config(['$stateProvider', '$urlRouterProvider', 'appConfig', 'baSidebarServiceProvider', function config($stateProvider, $urlRouterProvider, presenceConfig, sidebar) {
            $stateProvider
                .state('rh', {
                    abstract: true,
                    title: 'Rh',
                    template: '<div ui-view></div>',
                    url: '/rh',
                    sidebarMeta: {
                        icon: 'ion-person-stalker',
                        order: 0,
                    },
                })
                .state('rh.employee', {
                    url: '/employee',
                    templateUrl: 'employee/employee.html',
                    controller: "employeeListController",
                    title: 'Employee',
                    resolve: {
                        employees: ['Employee', 'toastr', function(employee, toastr) {
                            return employee.query();
                        }]
                    },

                    sidebarMeta: {
                        icon: 'ion-person-stalker',
                        order: 0,
                    },
                })

            .state('rh.presence', {
                url: '/presence',
                templateUrl: 'presence/presence.html',
                controller: "presenceListController",
                title: 'Presence',
                resolve: {
                    presences: ['Presence', 'toastr', function(presence, toastr) {
                        return presence.query();
                    }]
                },

                sidebarMeta: {
                    icon: 'ion-ios-alarm',
                    order: 1,
                },
            });
            $urlRouterProvider.when('/rh', '/rh/employee');
            console.log('Rh Module configured');
        }]);






})();