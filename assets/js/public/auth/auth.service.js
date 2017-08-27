/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('Auth')
        .service('Auth', ['$q', '$http', '$rootScope', 'sailsResource', function($q, $http, $rootScope, sailsResource) {
            var User = sailsResource('user', {
                'register': { method: 'POST', url: '/register' },
            }, {
                verbose: true
            });


            // return available functions for use in the controllers
            return ({
                me: me,
                login: login, //Login user
                logout: logout, //Logout user
                register: register, //register new User
                createUser: createUser, //Create new Blank User,
                getRoles: getRoles, //Get role for a user
                isAdmin: isAdmin, //Say if admin is in roles 
                isPending: isPending, // say if user is pending
                ifIsPending: ifIsPending,
                isDenied: isDenied, //say if user is denied
                ifIsDenied: ifIsDenied
            });


            function me() {
                var d = $q.defer();
                $http.get('/user/me').then(
                    function(user) {
                        console.dir(user);
                        console.log('user identified as ' + user.data.username);
                        $rootScope.user = user.data;
                        //toastr.success($rootScope.user.username + ' is logout');
                        $rootScope.isLogged = true;
                        getRoles($rootScope.user.id).then(
                            function(roles) {
                                $rootScope.roles = roles;
                                d.resolve(true);
                            },
                            function() {
                                d.resolve(true);
                            });
                    },
                    function(err) {
                        console.log('user not identified');
                        $rootScope.isLogged = false;
                        delete $rootScope.user;
                        d.resolve(false);
                    }
                );
                return d.promise;

            }

            function getRoles(id) {
                console.log('Get roles for user ' + id);
                var d = $q.defer();
                $http.get('/user/' + id + '/roles').then(
                    function(roles) {
                        console.dir(roles);
                        d.resolve(roles.data);
                    },
                    function(err) {
                        d.reject();
                    }
                );
                return d.promise;
            }

            function login(email, password) {
                var d = $q.defer();
                // create a new instance of deferred
                //var deferred = $q.defer();

                $http.post('/auth/local', { identifier: email, password: password }).then(
                    function(user) {
                        $rootScope.user = user.data;
                        $rootScope.isLogged = true;
                        getRoles($rootScope.user.id).then(
                            function(roles) {
                                $rootScope.roles = roles;
                                d.resolve($rootScope.user);
                            },
                            function() {
                                d.resolve($rootScope.user);
                            });

                    },
                    function(err) {
                        console.dir(err);
                        $http.get('/flash', { params: { code: 'error' } }).then(
                            function(data) {
                                delete $rootScope.user;
                                delete $rootScope.roles;
                                $rootScope.isLogged = false;
                                d.reject(data);
                            }

                        );

                    }
                );
                return d.promise;
            }

            function logout() {
                var d = $q.defer();
                $http.get('/logout').then(
                    function() {
                        var username = $rootScope.user.username;
                        delete $rootScope.user;
                        delete $rootScope.roles;
                        d.resolve(username);
                    }
                );
                return d.promise;
            }

            function createUser() {
                return new User();
            }

            function register(user) {
                var d = $q.defer();
                console.dir(user);
                $http.post('/register', { username: user.username, email: user.email, password: user.password }).then(
                    function(user) {
                        d.resolve();
                    },
                    function(err) {
                        d.reject(err);
                    }
                );
                return d.promise;
            }

            function isAdmin(roles) {
                console.log('Check admin roles for');
                console.dir(roles);
                console.dir(_.map(roles, "name"));
                return $q(function(resolve, reject) {
                    var res = _.findIndex(_.map(roles, "name"), function(role) { return role == "admin" });
                    console.log(res > -1);
                    resolve(res > -1);
                });
            }

            function isPending(user) {
                return user.state === 'pending';
            }


            function ifIsPending(user, callback, otherwise) {
                if (isPending(user))
                    callback();
                else
                if (_.isFunction(otherwise)) otherwise();
            }

            function isDenied(user) {
                return user.state === 'denied';
            }

            function ifIsDenied(user, callback, otherwise) {
                if (isDenied(user))
                    callback();
                else
                if (_.isFunction(otherwise)) otherwise();
            }
        }])


    ;

})();