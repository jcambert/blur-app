/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('BlurAdmin.formBuilderCore')

    .directive('fbForm', [function() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                src: '=?',
                url: '=?',
                formAction: '=?',
                form: '=?',
                submission: '=?',
                readOnly: '=?',
                hideComponents: '=?',
                requireComponents: '=?',
                disableComponents: '=?',
                formioOptions: '=?',
                options: '=?'
            },
            templateUrl: 'fbcore/fbform.html',


        }
    }])

    ;

})();