/**
 * Created by k.danovsky on 13.05.2016.
 */

(function() {
    'use strict';

    angular.module('Employee')
        .config(['$stateProvider', '$urlRouterProvider', 'appConfig', 'baSidebarServiceProvider', function config($stateProvider, $urlRouterProvider, presenceConfig, sidebar) {
            /* $stateProvider
                 .state('employee', {
                     abstract: true,
                     url: '/employee',
                     template: '<div ui-view></div>',
                     title: 'Employee',


                     sidebarMeta: {
                         icon: 'ion-person-stalker',
                         order: 0,
                     },
                 })
                 .state('employee.list', {
                     title: 'Liste',
                     url: '/list',
                     resolve: {
                         employees: ['Employee', 'toastr', function(employee, toastr) {
                             return employee.query();
                         }]
                     },
                     views: {
                         '': {
                             templateUrl: 'employee/employee.html',
                             controller: "employeeListController",
                         }
                     },
                     sidebarMeta: {
                         order: 0,
                     },

                 })

             ;
             $urlRouterProvider.when('/employee', '/employee/list');*/
            console.log('Employee Module configured');
        }]);






})();