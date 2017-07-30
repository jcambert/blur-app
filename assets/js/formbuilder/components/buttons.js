/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('BlurAdmin.formBuilderComponents')

    .config(['fbComponentsProvider', function(components) {
        components.register('button', {
            title: 'button',
            tooltip: 'Basic html click button or submit button',
            template: 'fbcomponent/button.html',
            settings: {
                input: true,
                label: 'Submit',
                tableView: false,
                key: 'submit',
                size: 'md',
                leftIcon: '',
                rightIcon: '',
                block: false,
                action: 'submit',
                disableOnInvalid: false,
                theme: 'primary'
            },
            controller: ['$scope', function($scope) {

            }]
        });
    }])

    ;

})();