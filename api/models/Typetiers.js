/**
 * Typetiers.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    code:{
      type:'string',
      maxLength:2,
      primaryKey:true
    },
    libelle:{
      type:'string',
      required:true,
    },
    tiers:{
      collection:'tiers',
      via:'type'
    }
  },
  seedData:[
    {code:'SO',libelle:'Societe'},
    {code:'BA',libelle:'Banque'},
    {code:'CB',libelle:'Client Bloqué'}, 
    {code:'CL',libelle:'Client'},
    {code:'FB',libelle:'Fournisseur Bloqué'},
    {code:'FO',libelle:'Fournisseur'},
    {code:'PR',libelle:'Prospect'},
    {code:'RE',libelle:'Représentant'},
    {code:'SA',libelle:'Salarié'},
    {code:'TR',libelle:'Transporteur'},
  ]
};

