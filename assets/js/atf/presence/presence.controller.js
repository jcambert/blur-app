/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function() {
    'use strict';



    angular.module('Presence')
        .controller('presenceListController', ['$scope', '$rootScope', '$state', 'modal', 'toastr', 'presences', 'Presence', function($scope, $rootScope, $state, modal, toastr, presences, Presence) {
            console.dir(presences);
            $rootScope.$on('$sailsResourceCreated', function(event, message) {

                if (message.model == 'presence') {
                    var model = _.find($scope.presences, function(e) { return e.id == message.id; });

                    console.dir(message);
                    toastr.success(model.firstname + ' ' + model.lastname + ' a été creer');
                }

            });
            $rootScope.$on('$sailsResourceDestroyed', function(event, message) {
                if (message.model == 'presence') {
                    var model = _.find($scope.presences, function(e) { return e.id == message.id; });
                    console.dir(message);
                    // var employee = message.data;
                    toastr.success(model.firstname + ' ' + model.lastname + ' a été supprimé');
                }
                console.dir(message);
            });
            $rootScope.$on('$sailsResourceUpdated', function(event, message) {
                if (message.model == 'employee') {
                    var model = _.find($scope.presences, { 'id': message.id });
                    console.dir(message);
                    //var employee = message.data;
                    var msg = model.firstname + ' ' + model.lastname + ' a été modifié';
                    if (angular.isDefined(message.data.lock) && angular.isObject(message.data.lock))
                        if (message.data.lock.lock)
                            msg = model.firstname + ' ' + model.lastname + ' a été bloqué par ' + message.data.lock.lockby;
                        else if (!message.data.lock.lock)
                        msg = model.firstname + ' ' + model.lastname + ' a été débloqué par ' + message.data.lock.lockby;
                    // $scope.$apply();
                    toastr.success(msg);
                }
            });
            $scope.presences = presences;
            $scope.remove = function(o) {
                console.dir(o);
                modal.open('presence/presence.delete.html', { controller: 'presenceDeleteController', resolve: { presence: $scope.presence[o.index] } },
                    function ok(presence) {
                        presence.$delete(
                            function(resp) {
                                // toastr.success(employee.firstname + ' ' + employee.lastname + ' a été supprimé');
                            },
                            function(resp) {
                                toastr.error(resp);
                            })
                    },
                    function cancel() {}
                );
            };

            $scope.add = function(o) {
                modal.open('presence/presence.form.html', { controller: 'presenceFormController', resolve: { presence: new Presence() } },
                    function ok(employee) {
                        employee.$save(
                            function(resp) {
                                console.dir(resp);
                                if (resp.status)
                                    toastr.error(resp.details);
                                // else
                                //     toastr.success(employee.firstname + ' ' + employee.lastname + ' a été ajouté');
                            },
                            function(resp) {
                                toastr.error(resp);
                            })
                    },
                    function cancel() {}
                );
            };

            $scope.edit = function(o) {
                var presence = $scope.presences[o.index];;
                presence.$lock(function(resp) {
                    console.dir(resp);
                    modal.open('presence/presence.form.html', { controller: 'presenceFormController', resolve: { presence: presence } },
                        function ok(presence) {
                            presence.$save(
                                function(resp) {
                                    console.dir(resp);
                                    if (resp.status)
                                        toastr.error(resp.details);
                                    // else
                                    //   toastr.success(employee.firstname + ' ' + employee.lastname + ' a été modifié');
                                    employee.$unlock();
                                },
                                function(resp) {
                                    toastr.error(resp);
                                    employee.$unlock();
                                })
                        },
                        function cancel() {
                            employee.$unlock();
                        }
                    );
                });

            }
        }])

    .controller('presenceDeleteController', ['$scope', '$uibModalInstance', 'presence', function($scope, $uibModalInstance, presence) {
        console.dir(presence);
        $scope.presence = presence;
        $scope.ok = function() { $uibModalInstance.close($scope.presence); }
        $scope.cancel = function() { $uibModalInstance.dismiss(); }
    }])

    .controller('presenceFormController', ['$scope', '$uibModalInstance', 'presence', function($scope, $uibModalInstance, presence) {
        $scope.presence = presence;
        $scope.mode = presence.id ? 'edit' : 'add';
        $scope.ok = function() { $uibModalInstance.close($scope.presence); };
        $scope.cancel = function() { $uibModalInstance.dismiss(); };
    }])

    .controller('presenceDetailController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {
        $scope.presence = $scope.presences[$stateParams.id];
    }])

    .controller('presenceEditController', ['$scope', 'presence', function($scope, presence) {
        $scope.presence = presence;
    }])

    .controller('presenceAddController', ['$scope', 'presence', function($scope, presence) {
        $scope.presence = presence;
    }])

    ;

})();