/**
 * @author jc.ambert
 * created on 26.07.2017
 */
(function () {
  'use strict';

 

  angular.module('BlurAdmin.formBuilderCore')

  /**
   * Components register
   */
   .provider('fbComponents',[function(){
       //registered component
        var components={};
        var groups={
            __component:{
                title:'Basic Components',
                tooltip:'Basic HTML Components like button,input,textarea and so on'
            },
            advanced:{
                title:'Special Components',
                tooltip:'Special Components like email,phone,datetime, currency and so on'
            },
            layout:{
                title:'Layout components',
                tooltip:'Layout components like grid, panel, tabs '
            }
        }
        return{
            addGroup:function(name,group){
                groups[name]=group;
            },
            register:function(type,component,group){
                 if (!components[type]) {
                    components[type] = component;
                }
                else {
                    angular.extend(components[type], component);
                }

                // Set the type for this component.
                if (!components[type].group) {
                    components[type].group = group || '__component';
                }
                components[type].settings.type = type;
            },
             $get: function() {
                return {
                    components: components,
                    groups: groups
                };
            }
        }
   }])
    ;
})();

