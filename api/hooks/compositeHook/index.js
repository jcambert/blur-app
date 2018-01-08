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
                _.each(model.attributes, (field, key) => {
                    createUniqueWith(model, field, key);
                    createCompositeKeys(model, field, key);

                });
            });


            sails.log.info("Hook:Composite initialized");
            return done();
        }


    }
}

function createCompositeKeys(model, field, key) {
    if (_.isObject(field.composite) && _.isArray(field.composite.compositeOn)) {

        model.beforeValidate = beforeValidate(key, field.composite.compositeOn, model['beforeValidate']);
        addCompositeType(model);
        return;
    }
}

function createUniqueWith(model, field, key) {
    //  sails.log.info(field);
    var keys = [];
    if (_.isObject(field.uniqueWith) && _.isArray(field.uniqueWith.fields)) {
        var composite = {};
        keys = [key].concat(field.uniqueWith.fields);
        var fieldName = keys.join('_');
        composite[fieldName] = { type: 'string', required: true, unique: true };

        _.defaults(model.attributes, composite);

        model.beforeValidate = beforeValidate(fieldName, keys, model['beforeValidate']);


        if (field.uniqueWith.uppercase) {
            sails.log.info('Has field uppercase');
            model.afterValidate = afterValidate(fieldName, keys, model['afterValidate']);
        }

        addUniqueWithType(model);
        return;
    }

}


function beforeValidate(fieldName, fields, callback) {

    var monkey = function(model, cb) {
        sails.log.info(fieldName);
        var composites = [];
        _.forEach(fields, function(field) {
            sails.log.info(model[field]);
            composites.push(model[field]);
        });
        sails.log.info(composites);
        model[fieldName] = composites.join(':');
        sails.log.info(model[fieldName]);
        if (_.isFunction(callback)) {
            callback(model, cb);
        } else {
            cb();
        }
    }
    return monkey;


}

function afterValidate(fieldName, fields, callback) {
    var monkey = function(model, cb) {
        _.forEach(fields, function(field) {
            sails.log.info(field);
            model[field] = model[field].toUpperCase();
        });
        if (_.isFunction(callback)) {
            callback(model, cb);
        } else {
            cb();
        }
    };
    return monkey;
}

function addCompositeType(model) {
    if (_.isUndefined(model.types))
        model.types = {};
    if (!('composite' in model.types)) {
        model.types.composite = function(value) { return true; };

    }
}

function addUniqueWithType(model) {
    if (_.isUndefined(model.types))
        model.types = {};
    if (!('uniqueWith' in model.types)) {
        model.types.uniqueWith = function(value) { return true; };

    }
}