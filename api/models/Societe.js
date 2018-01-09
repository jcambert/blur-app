/**
 * Societe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var uuid = require('uuid');
module.exports = {

  attributes: {
   /* id: {
      type: 'string',
      primaryKey: true,
      required: true,
      defaultsTo: function() {
          return uuid.v4();
      }
   },*/
    code:{
      type:'string',
      required:true,
      unique:true
    },
    nom:{
      type:'string',
      required:true
    },
    logo:{
      type:'string'
    },
    adresse:{
      type:'string'
    },
    codePostal:{
      type:'string'
    },
    ville:{
      type:'string'
    },
    telephone:{
      type:'string'
    },
    fax:{
      type:'string'
    },
    rcs:{
      type:'string'
    },
    siret:{
      type:'string'
    },
    ape:{
      type:'string'
    },
    cee:{
      type:'string'
    },
    email:{
      type:'string'
    },
    web:{
      type:'string'
    }, 
    depots:{
      collection:'depot',
      via:'societe'
    }

  },
  seedData: [{code: '001 ', nom: 'atf industrie', depots:[{code:"01",nom:"depot principal"}] }],
};

