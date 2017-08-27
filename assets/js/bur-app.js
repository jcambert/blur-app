'use strict';
angular
    .module('BlurAdmin.configuration', [])
    .constant('appConfig', {
        templatePagesDirectory: 'templates/pages',
        templateThemeDirectory: 'templates/theme',
        title: '<span>ATF</span>&nbsp;Board',
        logo: '',
        state: 'dashboard',
        needlogin: true,
        enablevisitor: false,
        loginWith: ['local', 'google', 'twitter', 'linkedin'],


    });

angular
    .module('BlurAdmin', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        "xeditable",
        'ui.slimscroll',
        'ngJsTree',
        'angular-progress-button-styles',
        'Overlay',
        'Auth',
        'BlurAdmin.configuration',
        'BlurAdmin.theme',
        //'BlurAdmin.pages',
        //'BlurAdmin.formBuilder'
    ])



.config(['toastrConfig', function(toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: true,
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            progressBar: true,
        });
    }])
    .controller('mainCtrl', MainController)

.filter('trust', trustHtml)

.run(['Auth', 'toastr', 'Overlay', '$timeout', '$rootScope', '$window', '$log', function(auth, toastr, overlay, $timeout, $rootScope, $window, $log) {
    $log.log('BlurApp running');
    auth.me().then(function(result) {
        if (result) {
            toastr.success('Welcome ' + $rootScope.user.username);
        } else {
            overlay.start();
            toastr.warning('It seem your are disconnected...');
            $timeout(function() {
                $window.location = '/';
            }, 3000);
        }
    });
}])

;
console.dir(angular.module('BlurAdmin'));
/** @ngInject */
function MainController($scope, $rootScope, $timeout, $log, $window, Auth, toastr, appConfig, Overlay) {
    $scope.config = appConfig;
    $scope.logout = function() {
        Overlay.start();
        Auth.logout().then(
            function(username) {
                toastr.success(username + ' is logout');
                $timeout(function() { $window.location = '/'; }, 3000);
            },
            function(err) {
                toastr.error("A unknown error happened. See Console");
                $log.error(err);
            });

    };
}

/** @ngInject */
function trustHtml($sce) {
    return function(html) {
        return $sce.trustAsHtml(html);
    }

}