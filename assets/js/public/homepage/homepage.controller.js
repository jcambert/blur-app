/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('HomePageApplication')
        .controller('homepageController', ['$scope', '$rootScope', '$state', 'Auth', '$log', 'toastr', function($scope, $rootScope, $state, auth, $log, toastr) {
            // set-up loginForm loading state
            $scope.loginForm = {
                loading: false
            };
            $scope.loginForm.email = 'admin@example.com';
            $scope.loginForm.password = 'admin1234';

            $scope.login = function() {
                alert('login');
                // Set the loading state (i.e. show loading spinner)
                $scope.loginForm.loading = true;
                auth
                    .login($scope.loginForm.email, $scope.loginForm.password)
                    .then(function(user) {
                        if (auth.isAdmin($rootScope.roles))
                            window.location = '/';
                        else
                            auth.ifIsPending(user, function() {
                                    toastr.warning(user.username + ' is Pending');
                                },
                                auth.ifIsDenied(user, function() {
                                    toastr.error(user.username + ' is Denied')
                                }),
                                function() {
                                    window.location = '/';
                                });
                    })
                    // Submit request to Sails.
                    /*   $http.post('/auth/local', {
                               identifier: $scope.loginForm.email,
                               password: $scope.loginForm.password
                           })
                           .then(function onSuccess(data) {
                               var user = data.data;
                               $log.log('Welcome ' + user.firstname);
                               console.dir(user);
                               // Refresh the page now that we've been logged in.
                               //window.location = '/';
                               if (window.SAILS_LOCALS.me.pending)
                                   toastr.error("Your account is");
                           })
                           .catch(function onError(sailsResponse) {

                               // Handle known error type(s).
                               // Invalid username / password combination.
                               if (sailsResponse.status === 400 || 404) {
                                   // $scope.loginForm.topLevelErrorMessage = 'Invalid email/password combination.';
                                   //
                                   toastr.error('Invalid email/password combination.', 'Error', {
                                       closeButton: true
                                   });
                                   return;
                               }

                               toastr.error('An unexpected error occurred, please try again.', 'Error', {
                                   closeButton: true
                               });
                               return;

                           })
                           .finally(function eitherWay() {
                               $scope.loginForm.loading = false;
                           });*/
            };


            $scope.showHomePage = function() {
                $state.go('homepage.main');
            };
            $scope.showLoginForm = function() {
                $state.go('homepage.login');
            };
            $scope.showRegisterPage = function() {
                $state.go('homepage.register');
            }
        }])


    ;

})();