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