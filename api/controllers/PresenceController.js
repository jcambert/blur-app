/**
 * PresenceController
 *
 * @description :: Server-side logic for managing presences
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var moment=require('moment');
var _ = require('lodash');
/*String.prototype.bool = function() {
    if(_.isBoolean(this))return this;
    if(_.isString(this))
        return (/^(true|1|yes)$/i).test(this);
    if(_.isInteger)
        return this==0?false:true;
    throw Error(this + " is not supported for customed function bool");
};*/
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
    },
    add : function(req,res){
        sails.log(req.params);
        var emp = req.params['id'];
        //var wantout = Boolean(req.params['wantout']);

        return Employee.findOne({id:emp}).exec(function(err,employee){
            if (err) return res.serverError(err);
            if(_.isNull(employee) || _.isUndefined(employee))return res.notFound();
            return Presence.find({employee:emp}).sort('heureEntree desc').limit(1).exec(function(err,presences){
                if (err) return res.serverError(err);
                var now=new moment().toDate();
                
                
                if(presences.length==1 && _.isUndefined( presences[0].heureSortie)){
                    var presence = presences[0];
                    presence.heureSortie = now;
                    presence.save(function(err){
                        if (err) return res.serverError(err);
                        return res.json({presence:presence,way:'out'});
                    });
                } else{
                    Presence.create({employee:emp,heureEntree:now}).exec(function(err,presence){
                        if (err) return res.serverError(err);
                        return res.json({presence:presence,way:'in'});
                    })
    
                }
               
            });
        });
        
            
        
    }
};