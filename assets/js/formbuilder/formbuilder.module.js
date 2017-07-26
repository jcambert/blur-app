/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function () {
  'use strict';

  angular.module('formbuilder', [ ])
  .config([function(){

  }])
  .run(['$templateCache','$rootScope','$window',function($templateCache,$rootScope,$window){

  }])
  .directive('formioComponent',[function(){
    return{
        restrict:'E',
        replace:true,
        scope:{
            formio='?^formio'
        },
        templateUrl:function(element,attr){
            
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

