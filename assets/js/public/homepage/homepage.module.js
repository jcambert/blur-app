/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';

    angular.module('HomePageApplication.config', [])
        .constant('appConfig', {
            templateDirectory: 'templates/public'
        });

    angular.module('HomePageApplication', ['Auth', 'toastr', 'ui.router', 'HomePageApplication.config'])



    ;

})();