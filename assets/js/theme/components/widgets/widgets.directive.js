/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('widgets', widgets);

  /** @ngInject */
  function widgets(appConfig) {
    return {
      restrict: 'EA',
      scope: {
        ngModel: '='
      },
      templateUrl: appConfig.templateThemeDirectory + '/components/widgets/widgets.html',
      replace: true
    };
  }

})();