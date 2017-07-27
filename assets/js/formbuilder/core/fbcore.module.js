/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function () {
  'use strict';

 

  angular.module('BlurAdmin.formBuilderCore', [ ])
  .config([function(){

  }])
  /*.run(['$templateCache','$rootScope','$window','fbCoreTemplateDirectory','$log',function($templateCache,$rootScope,$window,fbCoreTemplateDirectory,$log){
        $templateCache.put('fbcore/component.html',fbCoreTemplateDirectory+'component.html');
        $log.log('formBuilderCore running');
  }])*/
    .directive('fbform',[function(){
        return {
            restrict:'E',
            replace:true,
            template:'<div></div>',
            controller:['$scope',function($scope){

            }]
        }
    }])
  .directive('fbComponent',[function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            formio:'?^formio'
        },
        templateUrl:function(element,attr){
            return 'fbcore/component.html';
        },
        link:function(scope,element,attr,formioCtrl){
            if(angular.isDefined(formioCtrl)){

            }else{

            }
        },
        controller:['$scope',function($scope){
            //
            $scope.isVisible = function(){
                
            };

            $scope.isRequired = function(){

            };

            $scope.resetForm = function(){

            };

            $scope.isDisabled = function(){

            }
        }]

    }
  }])
  ;
  
})();

