/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    getIndex: function(req, res) {
        //res.locals.layout='layout';
        sails.log('Rendering Dashboard');
        return res.view({ layout: 'layout' });
    }
};