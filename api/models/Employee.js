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
        nom: {
            type: 'string',
            required: true
        },
        prenom: {
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
        presences:{
            collection:'presence',
            via:'employee'
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
            return this.nom + ' ' + this.prenom;
        },
    },

    seedData: [{id:'be4b0414-2d96-42cf-98c3-3288ad361ae4', nom: 'ambert ', prenom: 'jc', badge: 1 }, { id:'b1cfb70a-c13f-4fce-b57a-91ca34ccd350', nom: 'ambert', prenom: 'maryline', badge: 10 }],
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