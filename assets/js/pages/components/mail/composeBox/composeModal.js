/**
 * @author a.demeshko
 * created on 12/24/15
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.components.mail')
        .service('composeModal', composeModal);

    /** @ngInject */
    function composeModal($uibModal, appConfig) {
        this.open = function(options) {
            return $uibModal.open({
                animation: false,
                templateUrl: appConfig.templatePagesDirectory + '/components/mail/composeBox/compose.html',
                controller: 'composeBoxCtrl',
                controllerAs: 'boxCtrl',
                size: 'compose',
                resolve: {
                    subject: function() {
                        return options.subject;
                    },
                    to: function() {
                        return options.to;
                    },
                    text: function() {
                        return options.text;
                    }
                }
            });
        }

    }

})();