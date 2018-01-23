/**
 * Commande.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    societe:{
      type:'string',
      required:true,
      uniqueWith:{
        fields:['numero'],
        uppercase:true
      }
    },
    numero:{
      type:'integer',
      required:true,
      //autoIncrement: true
    },
    type:{
      type:'string',
      required:true,
      enum:['CC','CF','CI','CH']/* CC: Commande client, CF: Commande Fournisseur, CI:Commande Interne, CH: Commande 'Chiffrage' */
    },
    libelle:{
      type:'string'
    },
    tiers:{
      model:'tiers',
      required:true
    },
    livrea:{
      type:'json'
    },
    facturea:{
      type:'json'
    },
    montantht:{
      type:'float',
      required:true,
      defaultsTo:0.0
    },
    lignes:{
      collection:'LigneCommande',
      via:'commande'
    }
  },
  seedData:[
    {societe:'001',numero:1,type:'CC',tiers:'001:INNOVELEC'},
    {societe:'001',numero:2,type:'CC',tiers:'001:INNOVELEC'},
    {societe:'001',numero:3,type:'CI',tiers:'001:ATF'}
  ]

};

