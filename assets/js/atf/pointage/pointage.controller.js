angular.module('Pointage')
    .controller('pointageController', ['$scope', '$rootScope', '$state', 'modal', 'toastr', 'Employee', 'Auth', 'Presence', 'Time', function($scope, $rootScope, $state, modal, toastr, Employee, auth, Presence, Time) {
        //$scope.employee = undefined;
        //$scope.badge=10;
        $rootScope.$on('$sailsResourceAddedTo', function(event, message) {
            if (message.model == 'presence') {
                // some logic for user update messages
                console.dir(message);
                toastr.success('Un nouveau pointage a été ajouté');

                retrieve();
            }
        });

        $rootScope.$on('$sailsResourceUpdated', function(event, message) {
            if (angular.isDefined($scope.employee) && message.model.toLowerCase() == 'presence' && message.data.employee == $scope.employee.id) {
                // some logic for user update messages
                console.dir(message);
                //var idx=_.findIndex($scope.presences,function(presence){return presence.id==message.data.id;});
                //$scope.presences[idx]=message.data;
                $scope.wantout = !angular.isDefined(_.head($scope.employee.presence).heureSortie);
                toastr.success('Un pointage à été modifie');
            }
        });

        $rootScope.$on('$sailsResourceCreated', function(event, message) {
            if (angular.isDefined($scope.employee) && message.model.toLowerCase() == 'presence' && message.data.employee == $scope.employee.id) {
                // some logic for user update messages
                console.dir(message);
                //var idx=_.findIndex($scope.presences,function(presence){return presence.id==message.data.id;});
                //$scope.presences[idx]=message.data;
                //$scope.presences.push(message.data);
                $scope.wantout = !angular.isDefined(_.head($scope.employee.presences).heureSortie);
                toastr.success('Un pointage à été ajouté');
            }
        });

        function retrieve() {
            delete $scope.employee;
            //Employee.query({where:{badge:$scope.badge.badge},populate:['presences'],sort:['heureEntree desc']}
            //Employee.query({where:{badge:$scope.badge.badge},populate:[{'presences':{sort:'heureEntree desc',limit:5}}]}
            //Employee.query({badge:$scope.badge.badge}
            Employee.withpresence({ badge: $scope.badge.badge },
                function(res) {
                    console.dir(res);
                    if (res.badge == $scope.badge.badge) {
                        $scope.employee = res;

                        toastr.success('Pointages pour ' + $scope.employee.prenom);

                        var last = _.head($scope.employee.presences)
                        $scope.wantout = angular.isDefined(last) && !angular.isDefined(last.heureSortie);
                    } else {
                        toastr.warning('Aucun employee existe avec ce numero de badge');
                    }
                },
                function(err) {
                    toastr.error(err);
                });
        }
        $scope.retrieve = function() {
            retrieve();
        };
        $scope.addPresence = function() {
            if (!angular.isDefined($scope.employee)) {
                toastr.error("Aucun employee defini. <br>Ajout d'un mouvement impossible");
                return;
            }
            console.log('try add presence for employee:', $scope.employee.id);
            var presence = _.head($scope.employee.presences);
            if (!angular.isDefined(presence.heureSortie)) {
                Time.now().success(function(data, status) {
                    presence.heureSortie = data.now;
                    $scope.employee.$save(function(data) {
                            toastr.success('Au revoir ' + $scope.employee.prenom);
                            $scope.wantout = false;
                        },
                        function(err) {
                            toastr.error(err);
                        })

                });
            } else {
                Time.now().success(function(data, status) {
                    presence = new Presence();
                    presence.employee = $scope.employee.id;
                    presence.heureEntree = data.now;
                    presence.$save(function(data) {
                            toastr.success('Bonjour ' + $scope.employee.prenom);
                            $scope.wantout = true;
                        },
                        function(err) {
                            toastr.error(err);
                        });

                });

            }

        };
        $scope.badge = {};
        $scope.table = "pointage/" + (auth.isAdmin ? "pointage.admin.html" : "pointage.user.html");



    }])

;