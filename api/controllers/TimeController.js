/**
 * PresenceController
 *
 * @description :: Server-side logic for managing presences
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment=require('moment');

module.exports = {
    now: function(req, res) {
        var now = new moment().toDate();
        return res.json({now:now});
    }
};