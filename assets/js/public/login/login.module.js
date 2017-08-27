/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('LoginApplication', [
        'Auth',
        'toastr',
        'Overlay',
    ])

    .config(['toastrConfig', function(toastrConfig) {
        angular.extend(toastrConfig, {
            allowHtml: true,
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            progressBar: true,
        });
    }]);
    /*
        .run(['bsLoadingOverlayService', function(bsLoadingOverlayService) {
            // console.log('Blur Dashboard running');
            bsLoadingOverlayService.setGlobalConfig({
                templateUrl: 'loading-overlay-template.html'
            });
        }]);*/

})();