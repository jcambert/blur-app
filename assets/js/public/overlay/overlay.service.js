/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('Overlay')


    .service('Overlay', ['bsLoadingOverlayService', function(bsLoadingOverlayService) {

        this.start = function() {
            bsLoadingOverlayService.start();
        }

        this.stop = function() {
            bsLoadingOverlayService.stop();
        }
    }]);

})();