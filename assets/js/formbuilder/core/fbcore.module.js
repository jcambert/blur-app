/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('BlurAdmin.formBuilderCore', [])
        .config([function() {

        }])

    /*
        .directive('fbComponent', [function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    formio: '?^formio'
                },
                templateUrl: function(element, attr) {
                    return 'fbcore/component.html';
                },
                link: function(scope, element, attr, formioCtrl) {
                    if (angular.isDefined(formioCtrl)) {

                    } else {

                    }
                },
                controller: ['$scope', function($scope) {
                    //
                    $scope.isVisible = function() {

                    };

                    $scope.isRequired = function() {

                    };

                    $scope.resetForm = function() {

                    };

                    $scope.isDisabled = function() {

                    }
                }]

            }
        }]);
    */
})();