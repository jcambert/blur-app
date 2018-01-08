/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        societe: {
            type: 'string',
            required: true,
            uniqueWith: {
                fields: ['code', 'complementaire'],
                uppercase: true
            }
        },
        code: {
            type: 'string',
            required: true
        },
        complementaire: {
            type: 'string',
            required: true
        },
        libelle: {
            type: 'string',
        }
    },
};