/**
 * Tiers.js
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
        fields:['code'],
        uppercase:true
      }
    },
    code:{
      type:'string',
      required:true,
    },
    nom:{
      type:'string',
    },
    type:{
      model:'typetiers',
      required:true
    },
    commandes:{
      collection:'commande',
      via:'tiers'
    }
  },
  seedData:[
    {societe:'001',code:'ATF',type:'SO'},
    {societe:'001',code:'Innovelec',type:'CL'},
    {societe:'001',code:'Brisach',type:'CL'},
    {societe:'001',code:'Color Pro',type:'FO'},
  ]
};

