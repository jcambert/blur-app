/**
 * Nomenclature.js
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
                fields: ['article', 'composant', 'ligne'],
                uppercase: true
            }
        },
        article: {
            model: 'article',
            required: true,
        },
        composant: {
            model: 'article',
            required: true
        },
        ligne: {
            type: 'integer',
            min: 0,
            required: true
        },
        quantite: {
            type: 'float',
            required: true
        },
        unite: {
            type: 'string',
            required: true
        },
        libelle: {
            type: 'string'
        },

    },
    checkSocieteExist: true,
    seedData: [{ societe: '001', article: '001:1234', composant: '001:LASER', ligne: 10, quantite: 1, unite: 'H', libelle: 'Decoupe laser suivant prg N°45621001' },
        { societe: '001', article: '001:1234', composant: '001:5678', ligne: 20, quantite: 1, unite: 'P', libelle: '' },
        { societe: '001', article: '001:5678', composant: '001:LASER', ligne: 15, quantite: 1.5, unite: 'H', libelle: 'Decoupe laser suivant prg N°78778001' }
    ]
};