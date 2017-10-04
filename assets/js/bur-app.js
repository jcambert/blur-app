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

.run(['Auth', 'toastr', 'Overlay', '$timeout', '$rootScope', '$window','$uibModalStack', '$log', function(auth, toastr, overlay, $timeout, $rootScope, $window,$modalStack , $log) {
    $log.log('BlurApp running');

    $rootScope.go = function($event, to, params) {
        // If the command key is down, open the URL in a new tab
        if ($event.metaKey) {
            var url = $state.href(to, params, { absolute: true });
            window.open(url, '_blank');

        } else {
            $state.go(to, params);
        }

    };

    $rootScope.goBack = function(){$window.history.back();}

    $rootScope.goForward = function(){window.history.forward();}

    function authme(){
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
    }
   

    $rootScope.$on('$sailsDisconnected',function(){
        toastr.error('Vous etes déconnecté du serveur');
        $modalStack.dismissAll('close');
        overlay.start();
    });

    $rootScope.$on('$sailsConnected',function(){
       authme();
    });

    $rootScope.$on('$sailsSocketError',function(error){
        toastr.error(err);
        overlay.start();
     });

    authme();

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