/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var _ = require('lodash');
module.exports = {

    attributes: {

        societe: {
            type: 'string',
            required: true,
            uniqueWith: {
                fields: ['code', /* 'complementaire','depot'*/ ],
                uppercase: true
            }
        },
        code: {
            type: 'string',
            required: true
        },
        /*  complementaire: {
              type: 'string',
              required: true
          },
          depot:{
            model:'depot',
            type:'string',
            required:true,
          },*/
        libelle: {
            type: 'string',
        },
        type: {
            model: 'typearticle',
            required: true
        },
        stock: {
            type: 'float',
            required: true,
            defaultsTo: 0.0
        },
        qteres: {
            type: 'float',
            required: true,
            defaultsTo: 0.0
        },
        qteatt: {
            type: 'float',
            required: true,
            defaultsTo: 0.0,
        },
        stockOff: {
            type: 'float',
            required: true,
            defaultsTo: 0.0
        },
        stkmin: {
            type: 'float',
            required: true,
            defaultsTo: 0.0
        },
        stkmax: {
            type: 'float',
            required: true,
            defaultsTo: 0.0
        },
        /*Mini appro*/
        miniapp: {
            type: 'float',
            required: true,
            defaultsTo: 0.0
        },
        /* lot appro */
        lotapp: {
            type: 'float',
            required: true,
            defaultsTo: 0.0
        },
        valide: {
            type: 'boolean',
            required: true,
            defaultsTo: true
        },
        nomenclatures: {
            collection: 'nomenclature',
            via: 'article'
        },
        casemploi: {
            collection: 'nomenclature',
            via: 'composant'
        }
    },
    checkSocieteExist: true,
    seedData: [{ societe: '001', code: 'LASER', libelle: 'Laser Bystronic', type: 'MO' },
        { societe: '001', code: '1234', libelle: 'libelle 1234', type: 'PF' },
        { societe: '001', code: '5678', libelle: 'libelle 5678', type: 'SF' },
    ]
};