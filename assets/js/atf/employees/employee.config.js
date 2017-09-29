/**
 * Created by k.danovsky on 13.05.2016.
 */

(function() {
    'use strict';

    angular.module('Employee')
        .config(['$stateProvider','$urlRouterProvider', 'appConfig', 'baSidebarServiceProvider', function config($stateProvider,$urlRouterProvider, presenceConfig, sidebar) {
            $stateProvider
                .state('employee', {
                    abstract: true,
                    url: '/employee',
                    template: '<div ui-view></div>',
                    title: 'Employee',
                    resolve: {
                        employees: ['Employee','toastr',function(employee,toastr) {
                            employee.query(function(res){
                                return res;
                            },function(err){
                                toastr.error(err);
                                return [];
                            })
                           // return [{ id: 1, fullname: 'ambert jc', badge: 1 }, { id: 2, fullname: 'ambert maryline', badge: 10 }]
                        }]
                    },
                    
                                        sidebarMeta: {
                                            icon: 'ion-person-stalker',
                                            order: 0,
                                        },
                })
                .state('employee.list', {
                    //abstract: true,
                    title: 'Liste',
                    url: '/list',
                    views: {
                        '': {
                            templateUrl: 'presence/employee.html',
                           // title: 'Employee',
                            controller: "employeeListController",
                        }
                    } ,
                    sidebarMeta: {
                        order: 0,
                    },

                })
                .state('employee.detail', {
                    url: '/:id',
                    views: {
                        'detail': {
                            template: '{{employee.fullname}}',
                            controller: 'employeeDetailController'
                        }
                    }
                })
                .state('employee.edit',{
                    url:'/edit/:id',
                    views:{
                        'detail':{
                            template:'<p>edit</p>',
                            controller:'EmployeeEditController',
                            resolve:{
                                employee:['$stateParams','$state','$rootScope','Employee','toastr', function($stateParams,$state,$rootScope,employee,toastr){
                                    employee.get({id:$stateParams.id},
                                        function(result){
                                            return result;
                                        },function(err){
                                            toastr.error(err);
                                            $rootScope.goBack();
                                        })
                                }]
                            }
                        }
                    }
                })
                .state('employee.add',{
                    url:'/add',
                    views:{
                        '':{
                            template:'<p>Add</p>',
                            controller:'EmployeeAddController',
                            resolve:{
                                employee:['Employee',function(Employee){
                                    return new Employee();
                                }]
                            }
                        }
                    },
                    title:'Ajouter un employee',
                    sidebarMeta: {
                        order: 0,
                    },
                })
                ;
                $urlRouterProvider.when('/employee', '/employee/list');
            console.log('Employee Module configured');
        }]);






})();