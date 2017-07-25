/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('msgCenter', msgCenter);

  /** @ngInject */
  function msgCenter(appConfig) {
    return {
      restrict: 'E',
      templateUrl: appConfig.templateThemeDirectory + '/components/msgCenter/msgCenter.html',
      controller: 'MsgCenterCtrl'
    };
  }

})();