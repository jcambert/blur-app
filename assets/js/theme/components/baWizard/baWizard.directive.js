(function() {
    'use strict';

    angular.module('BlurAdmin.theme.components')
        .directive('baWizard', baWizard);

    /** @ngInject */
    function baWizard(appConfig) {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: appConfig.templateThemeDirectory + '/components/baWizard/baWizard.html',
            controllerAs: '$baWizardController',
            controller: 'baWizardCtrl'
        }
    }
})();