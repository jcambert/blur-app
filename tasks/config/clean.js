/**
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */
module.exports = function(grunt) {

    grunt.config.set('clean', {
        options: { force: true },
        dev: ['.tmp/public/styles/**','.tmp/public/templates/**'],
        build: ['www'],
        sails: ['.tmp/public/js/dependencies/dist/sails.io.js'] //remove angular-resource-sails dependency
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};