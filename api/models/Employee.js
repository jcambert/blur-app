/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var uuid = require('uuid');
module.exports = {

    attributes: {
        id: {
            type: 'string',
            primaryKey: true,
            required: true,
            defaultsTo: function() {
                return uuid.v4();
            }
        },
        firstname: {
            type: 'string',
            required: true
        },
        lastname: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',

        },
        badge: {
            type: 'integer',
            required: true,
            unique: true
        },
        lock: {
            type: 'boolean',
            required: true,
            defaultsTo: false
        },
        lockby: {
            type: 'string',

        },
        fullname: function() {
            return this.firstname + ' ' + this.lastname;
        },
    },

    seedData: [{ firstname: 'ambert ', lastname: 'jc', badge: 1 }, { firstname: 'ambert', lastname: 'maryline', badge: 10 }],
    afterCreate: function(entry, cb) {
        sails.log.verbose('A new Employee was added:', entry);
        sails.sockets.broadcast('BlurApp', 'employee', entry);
        cb();
    },
    afterDelete: function(entry, cb) {
        sails.log.verbose('A Employee was deleted:', entry);
        sails.sockets.broadcast('BlurApp', 'employee', entry);
        cb();
    },
    afterUpdate: function(entry, cb) {
        sails.log.verbose('A Employee was updated:', entry);
        sails.sockets.broadcast('BlurApp', 'employee', entry);
        cb();
    }
};