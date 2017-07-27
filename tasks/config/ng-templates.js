'use strict';


module.exports = function(grunt) {

    grunt.config.set('ngtemplates', {
        devFormBuilderCore:{
           
                options:{
                    module:'BlurAdmin.formBuilder',
                    standalone:false,
                    merge:true,
                    prefix:'fbcore',
                    htmlmin:  { collapseWhitespace: true, collapseBooleanAttributes: true },
                    url:    function(url) { return url.replace('.tpl', ''); }
                },
                //cwd:'templates/formbuilder/core',
                files:[{
                    expand:true,
                    cwd:'assets/templates/formbuilder/core',
                    src:['**/*.tpl.html'],
                    dest:'.tmp/public/js/formbuilder/core/fbcore.templates.js'
                }]
               
            
        }

    });


    grunt.loadNpmTasks('grunt-angular-templates');

};