/**
 * `compileAssets`
 *
 * ---------------------------------------------------------------
 *
 * This Grunt tasklist is not designed to be used directly-- rather
 * it is a helper called by the `default`, `prod`, `build`, and
 * `buildProd` tasklists.
 *
 * For more information see:
 *   http://sailsjs.org/documentation/anatomy/my-app/tasks/register/compile-assets-js
 *
 */
module.exports = function(grunt) {
    grunt.registerTask('compileAssets', [
        'clean:dev',
        'bower:dev',
        'jst:dev',
        //'less:dev',
        'sass-injection:devMain',
        'sass:devMain',
        'sass:dev404',
        'sass:devAuth',

        'ngtemplates:devFormBuilderCore',

        'copy:dev',
        'coffee:dev'
    ]);
};