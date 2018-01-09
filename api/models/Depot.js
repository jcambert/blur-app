/**
 * Depot.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code:{
      type:'string',
      required:true
    },
    nom:{
      type:'string',
      required:true
    },
    solde:{
      type:'boolean',
      defaultsTo:false
    },
    societe:{
      model:'societe',
      required:true
    }
  }
};

