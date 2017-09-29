/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';

    angular.module('Presence.configuration', [])
        .constant('presenceConfig', {
            templateDirectory: 'templates/private/atf/presence',
            title: '<span>ATF - Gestion Presences</span>',
            logo: '',
            state: 'Presence',
            needlogin: true,
            enablevisitor: false,
            loginWith: ['integrated', 'google', 'twitter', 'linkedin'],


        });

    angular.module('Presence', [
        'ngAnimate',
        'ui.bootstrap',
        'ui.sortable',
        'ui.router',
        'ngTouch',
        'toastr',
        'smart-table',
        "xeditable",
        'ui.slimscroll',
        'ngJsTree',
        'angular-progress-button-styles',
        'bsLoadingOverlay',
        'Auth',
        'BlurAdmin.configuration',
        'Atf',
        'Presence.configuration',
        'Employee'
    ])



    ;

})();