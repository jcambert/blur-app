/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .directive('contentTop', contentTop);

  /** @ngInject */
  function contentTop($location, $state,appConfig) {
    return {
      restrict: 'E',
      templateUrl: appConfig.templateThemeDirectory + '/components/contentTop/contentTop.html',
      link: function($scope) {
        $scope.$watch(function () {
          $scope.activePageTitle = $state.current.title;
        });
      }
    };
  }

})();