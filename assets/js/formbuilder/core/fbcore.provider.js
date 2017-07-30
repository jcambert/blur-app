/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('BlurAdmin.formBuilderCore')
        .provider('fbForm', [function() {

            // Return the provider interface.
            return {


                $get: [
                    '$rootScope',
                    '$q',
                    function(
                        $rootScope,
                        $q
                    ) {
                        var wrapQPromise = function(promise) {
                            return $q.when(promise)
                                .catch(function(error) {
                                    if (error === 'Unauthorized') {
                                        $rootScope.$broadcast('formio.unauthorized', error);
                                    } else if (error === 'Login Timeout') {
                                        $rootScope.$broadcast('formio.sessionExpired', error);
                                    }
                                    // Propagate error
                                    throw error;
                                });
                        };
                        /*
                                                Formio.registerPlugin({
                                                    priority: -100,
                                                    // Wrap Formio.request's promises with $q so $apply gets called correctly.
                                                    wrapRequestPromise: wrapQPromise,
                                                    wrapStaticRequestPromise: wrapQPromise
                                                }, 'ngFormioPromiseWrapper');

                                                // Broadcast offline events from $rootScope
                                                Formio.events.onAny(function() {
                                                    var event = 'formio.' + this.event;
                                                    var args = [].splice.call(arguments, 0);
                                                    args.unshift(event);
                                                    $rootScope.$apply(function() {
                                                        $rootScope.$broadcast.apply($rootScope, args);
                                                    });
                                                });

                                                // Return the formio interface.
                                                return Formio;*/
                    }
                ]
            };
        }])

    /**
     * Components register
     */
    .provider('fbComponents', [function() {
        var $log = angular.injector(['ng']).get('$log');
        //registered component
        var components = {};
        var groups = {
            __component: {
                title: 'Basic Components',
                tooltip: 'Basic HTML Components like button,input,textarea and so on'
            },
            advanced: {
                title: 'Special Components',
                tooltip: 'Special Components like email,phone,datetime, currency and so on'
            },
            layout: {
                title: 'Layout components',
                tooltip: 'Layout components like grid, panel, tabs '
            }
        }
        return {
            addGroup: function(name, group) {
                groups[name] = group;
                $log.log('new group was created:' + group);
            },
            register: function(type, component, group) {
                if (!components[type]) {
                    components[type] = component;
                } else {
                    angular.extend(components[type], component);
                }

                // Set the type for this component.
                if (!components[type].group) {
                    components[type].group = group || '__component';
                }
                components[type].settings.type = type;
                $log.log(type + ' was registered in components ');
            },
            $get: function() {
                return {
                    components: components,
                    groups: groups
                };
            }
        }
    }]);
})();