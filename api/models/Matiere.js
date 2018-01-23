/**
 * Matiere.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nom:{
      type:'string',
      primaryKey: true,
      required: true
    },
    densite:{
      type:'float',
      required:true
    }
  },
  seedData:[{nom:'acier',densite:8},{nom:'inox',densite:8},{nom:'aluminium',densite:3}]
};

