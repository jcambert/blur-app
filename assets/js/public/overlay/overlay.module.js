/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('Overlay', [
        'bsLoadingOverlay',
    ])


    .run(['$templateCache', 'bsLoadingOverlayService', function($templateCache, bsLoadingOverlayService) {

        console.log('Overlay running');
        bsLoadingOverlayService.setGlobalConfig({
            templateUrl: 'loading-overlay-template.html'
        });
    }]);

})();