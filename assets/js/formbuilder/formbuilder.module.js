/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular
        .module('BlurAdmin.formBuilder', ['BlurAdmin.formBuilderCore', 'BlurAdmin.formBuilderComponents'])
        .run(['$log', function($log) {
            $log.log('BlurAdmin.formBuilder running')
        }]);

})();