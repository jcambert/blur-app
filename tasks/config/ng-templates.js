'use strict';


module.exports = function(grunt) {

    grunt.config.set('ngtemplates', {
        devFormBuilderCore: {

            options: {
                module: 'BlurAdmin.formBuilderCore',
                target: '.tmp/public/js/formbuilder/core/fbcore.templates.js',
                standalone: false,
                prefix: 'fbcore',
                htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true },
                url: function(url) { return url.replace('.tpl', ''); }
            },
            //cwd:'templates/formbuilder/core',
            files: [{
                expand: true,
                cwd: 'assets/templates/formbuilder/core',
                src: ['**/*.tpl.html'],
                //dest:'.tmp/public/js/formbuilder/core/fbcore.templates.js'
            }]
        },
        devFormBuilderComponents: {
            options: {
                module: 'BlurAdmin.formBuilderComponents',
                target: '.tmp/public/js/formbuilder/components/components.templates.js',
                standalone: false,
                prefix: 'fbcomponent',
                htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true },
                url: function(url) { return url.replace('.tpl', ''); }
            },
            //cwd:'templates/formbuilder/core',
            files: [{
                expand: true,
                cwd: 'assets/templates/formbuilder/components',
                src: ['**/*.tpl.html'],
                //dest:'.tmp/public/js/formbuilder/core/fbcore.templates.js'
            }]
        },
        devOverlay: {
            options: {
                module: 'Overlay',
                target: '.tmp/public/js/public/overlay/overlay.templates.js',
                standalone: false,
                prefix: '',
                htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true },
                url: function(url) { return url.replace('.tpl', ''); }
            },
            //cwd:'templates/formbuilder/core',
            files: [{
                expand: true,
                cwd: 'assets/templates/public/overlay',
                src: ['**/*.tpl.html'],
                //dest:'.tmp/public/js/formbuilder/core/fbcore.templates.js'
            }]
        },
        devAtf: {
            options: {
                module: 'Atf',
                target: '.tmp/public/js/private/atf/atf.templates.js',
                standalone: true,
                prefix: '',
                htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true },
                url: function(url) { return url.replace('.tpl', ''); }
            },
            //cwd:'templates/formbuilder/core',
            files: [{
                expand: true,
                cwd: 'assets/templates/private/atf',
                src: ['**/*.tpl.html'],
                //dest:'.tmp/public/js/formbuilder/core/fbcore.templates.js'
            }]
        }

    });


    grunt.loadNpmTasks('grunt-angular-templates');

};