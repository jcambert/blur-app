/**
 * FlashController
 *
 * @description :: Server-side logic for Show flash message
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var _ = require('lodash');
module.exports = {
    get: function(req, res) {
        sails.log.verbose('Get Flash Message for code:');
        res.setLocale('fr');
        var code = req.param('code');
        sails.log.verbose(code);
        var flash = req.flash(code);
        flash = _.map(flash, function(f) {
            return res.__(f);
        });
        return res.jsonx(flash);
    }
};