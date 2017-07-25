/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function() {
    'use strict';

    angular.module('BlurAdmin.pages.components.mail', ['BlurAdmin.configuration'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, appConfig) {
        $stateProvider
            .state('components.mail', {
                url: '/mail',
                abstract: true,
                templateUrl: appConfig.templatePagesDirectory + '/components/mail/mail.html',
                controller: "MailTabCtrl",
                controllerAs: "tabCtrl",
                title: 'Mail',
                sidebarMeta: {
                    order: 0,
                },
            }).state('components.mail.label', {
                url: '/:label',
                templateUrl: appConfig.templatePagesDirectory + '/components/mail/list/mailList.html',
                title: 'Mail',
                controller: "MailListCtrl",
                controllerAs: "listCtrl"
            }).state('components.mail.detail', {
                url: '/:label/:id',
                templateUrl: appConfig.templatePagesDirectory + '/components/mail/detail/mailDetail.html',
                title: 'Mail',
                controller: "MailDetailCtrl",
                controllerAs: "detailCtrl"
            });
        $urlRouterProvider.when('/components/mail', '/components/mail/inbox');
    }

})();