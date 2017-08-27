/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('LoginApplication')

    .controller('loginController', ['$scope', '$rootScope', 'Auth', '$timeout', 'toastr', 'Overlay', function($scope, $rootScope, auth, $timeout, toastr, overlay) {
        $scope.loginForm = {
            loading: false
        };
        $scope.loginForm.email = 'admin@example.com';
        $scope.loginForm.password = 'admin1234';

        function startAction() {
            $scope.loginForm.loading = true;
            overlay.start();
        }

        function stopAction() {
            $scope.loginForm.loading = false;
            overlay.stop();
        }

        $scope.login = function() {
            // Set the loading state (i.e. show loading spinner)
            startAction();
            auth
                .login($scope.loginForm.email, $scope.loginForm.password)
                .then(function(user) {
                    if (auth.isAdmin($rootScope.roles)) {
                        toastr.success('logged successfully.<br>Redirect in progress');
                        $timeout(function() { window.location = '/'; }, 3000);
                    } else
                        auth.ifIsPending(user, function() {
                                toastr.warning(user.username + ' is Pending');
                                stopAction();
                            },
                            auth.ifIsDenied(user, function() {
                                toastr.error(user.username + ' is Denied');
                                stopAction();
                            }),
                            function() {
                                toastr.success('logged successfully.<br>Redirect in progress');
                                $timeout(function() { window.location = '/'; }, 3000);

                            });
                }, function(err) {
                    stopAction();
                    _.forEach(err.data, function(d) {
                        toastr.error(d);
                    });
                });

        };
    }])

    ;

})();