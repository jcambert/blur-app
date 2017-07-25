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
        loginWith: ['integrated', 'google', 'twitter', 'linkedin'],


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

        'BlurAdmin.configuration',
        'BlurAdmin.theme',
        'BlurAdmin.pages'
    ])




.controller('mainCtrl', MainController)

.filter('trust', trustHtml)

.run([function() {
    console.log('Blur Dashboard running');
}])

;
/** @ngInject */
function MainController($scope, appConfig) {
    $scope.config = appConfig;

}

/** @ngInject */
function trustHtml($sce) {
    return function(html) {
        return $sce.trustAsHtml(html);
    }

}