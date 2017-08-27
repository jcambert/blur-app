/**
 * Created by k.danovsky on 13.05.2016.
 */

(function() {
    'use strict';

    angular.module('Presence')
        .config(['$stateProvider', 'appConfig', 'baSidebarServiceProvider', function config($stateProvider, presenceConfig, sidebar) {
            $stateProvider
                .state('employee', {
                    abstract: true,
                    url: '/employee',
                    template: '<div ui-view></div>',
                    title: 'Employee',
                    resolve: {
                        employees: function() {
                            return [{ id: 1, fullname: 'ambert jc', badge: 1 }, { id: 2, fullname: 'ambert maryline', badge: 10 }]
                        }
                    },

                })
                .state('employee.list', {
                    //abstract: true,
                    title: 'Liste',
                    url: '/list',
                    views: {
                        '': {
                            templateUrl: 'presence/employee.html',
                            title: 'Employee',
                            controller: "presenceListController",
                        }
                    },

                    sidebarMeta: {
                        icon: 'ion-person-stalker',
                        order: 0,
                    },

                })
                .state('employee.detail', {
                    url: '/:id',
                    views: {
                        'detail': {
                            template: '{{employee.fullname}}',
                            controller: 'presenceDetailController'
                        }
                    }
                });

            /*  sidebar.addStaticItem({
                  title: 'Presence',
                  icon: 'ion-ios-people-outline',
                  subMenu: [{
                      title: 'Employee',
                      stateRef: 'presence.main'
                  }, {
                      title: 'Sign Up',
                      fixedHref: 'reg.html',
                      blank: false
                  }, {
                      title: 'User Profile',
                      stateRef: 'profile'
                  }, {
                      title: '404 Page',
                      fixedHref: '404.html',
                      blank: true
                  }]
              });*/
        }]);






})();