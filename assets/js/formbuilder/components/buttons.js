/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function () {
  'use strict';

 

  angular.module('BlurAdmin.formBuilderComponents')

  .config(['fbComponentsProvider',function(components){
        components.register({
            title:'button',
            tooltip:'Basic html click button or submit button',
            template:'fbcomponent/button.html',
            settings:{

            },
            controller:['$scope',function($scope){

            }]
        });
  }])
 
  ;
  
})();

