angular.module('ModelResource',['sailsResource'])

.factory('User',['sailsResource',function(res){
    return sailsResource('User');
}])

.factory('Role',['sailsResource',function(res){
    return res('Role');
}])

.factory('Permission',['sailsResource',function(res){
    return res('Permission');
}])
.factory('Employee',['sailsResource', function(res){
    return res('Employee');
}])



;

angular.module('ui',[ 'ngAnimate', 'ui.bootstrap',])
.service('modal',['$uibModal',function($uibModal){ 
    this.open = function(templateUrl,options,ok,cancel){
        if(angular.isUndefined(options)) options={};
        if(angular.isUndefined(ok) || !angular.isFunction(ok))ok=function(){};
        if(angular.isUndefined(cancel) || !angular.isFunction(cancel))cancel=function(){};
        var modalInstance = $uibModal.open({
            animation: true,
            controller:options.controller,
            backdrop:options.backdrop || false,
            keyboard:options.keyboard || false,
            templateUrl: templateUrl,
            size: options.size || 'lg',
            resolve:options.resolve || {}
          });
        modalInstance.result.then(function (selectedItem) {
           ok(selectedItem);
          }, function () {
            cancel();
          });
    }
}])