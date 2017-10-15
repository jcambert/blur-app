/**
 * Presence.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

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
        heure: {
            type: 'datetime',
            required: true,
        },
        sens: {
            type: 'string',
            required: true,
            enum: ['entree', 'sortie']
        },
        employee: {
            model: 'employee'
        }
    }
};