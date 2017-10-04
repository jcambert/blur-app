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
            required: true,
            unique: true
        },
        lastname: {
            type: 'string',
            required: true,
            unique: true
        },
        email:{
            type : 'email',

        },
        badge: {
            type: 'integer',
            required: true,
            unique: true
        }
    },
    seedData: [{ fullname: 'ambert jc', badge: 1 }, { fullname: 'ambert maryline', badge: 10 }]
};