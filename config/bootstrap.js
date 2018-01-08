/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

 //POST http://localhost:1337/auth/local?identifier=admin@example.com&password=admin1234
 //POST http://localhost:1337/presence/add/be4b0414-2d96-42cf-98c3-3288ad361ae4
 global.erp = require('../api/core/index.js');

function Seed(model) {
    model.seed();
};

var _ = require('lodash');

module.exports.bootstrap = function(cb) {
    erp.load();
   /* Object.prototype.bool = function() {
        if(_.isBoolean(this))return this;
        if(_.isString(this))
            return (/^(true|1|yes)$/i).test(this);
        if(_.isInteger)
            return this==0?false:true;
        throw Error(this + " is not supported for customed function bool");
    };*/

    // It's very important to trigger this callback method when you are finished
    // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
    async.series([
        Employee.seed,
        Presence.seed,
        Permission.seed,
        Role.seed,
    ], cb);
    //  async.each([Employee], Seed, cb);
    //  cb();
};