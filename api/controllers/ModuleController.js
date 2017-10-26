/**
 * ModuleController
 *
 * @description :: Server-side logic for get modules available for user
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('lodash');
module.exports = {
    get: function(req, res) {
        sails.log.verbose('Get Modules for user:');
        return res.jsonx({ app: 'DashboardApplication', modules: [/*'BlurAdmin.pages',*/ 'Rh'] });
    }
};