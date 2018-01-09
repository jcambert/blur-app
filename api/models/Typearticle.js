/**
 * Typearticle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code:{
      primaryKey: true,
      type:'string',
      enum:['PF','SF','CO','MP','TO','PR','LI','MO','CH','ST']
    },
    description:{
      type:'string'
    }
  },
  seedData:[{code:'PF',description:'Produit Fini'},
    {code:'SF',description:'Produit semi-fini'},
    {code:'CO',description:'Composant'},
    {code:'MP',description:'Matière première'},
    {code:'MO',description:'Main Oeuvre'}]
};

