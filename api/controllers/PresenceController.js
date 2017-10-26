/**
 * PresenceController
 *
 * @description :: Server-side logic for managing presences
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    find: function(req, res) {
        return Presence.find().populate('employee').exec(function(err, presences) {
            if (err) return res.serverError(err);
            return res.json(presences);

        })
    },
    findByEmployee : function(req,res){
        var emp = req.params['employee'];
        return Presence.find({employee:emp}).sort('heureEntree desc').exec(function(err,presences){
            if (err) return res.serverError(err);
            return res.json(presences);
        })
    }
};