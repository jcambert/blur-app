/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = function eventsHook(app) {

    return {

        initialize(done) {

            var models = sails.models;
            _.each(models, model => {
               checkSocieteExist(model);

            });


            sails.log.info("Hook:checkSocieteExist initialized");
            return done();
        }


    }
}

function checkSocieteExist(model){
    if(_.isUndefined(model.checkSocieteExist) || !model.checkSocieteExist)return;
    model.beforeCreate=beforeCreate(model,model['beforeCreate']);
    
}

function beforeCreate(model, callback) {

    var monkey = function(model, cb) {
        
        Societe.findOne({code:model.societe}).populate('depots',{code:model.depot}).exec(function(err,societe){
            if(err) return cb(err);
            if(_.isUndefined(societe) || societe.depots.length==0)return cb(new Error("La societe "+model.societe + " avec le depot "+model.depot+" n'existe pas"));
            if (_.isFunction(callback)) {
                callback(model, cb);
            } else {
                cb();
            }
          });
        
        
    }
    return monkey;


}