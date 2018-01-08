/**
 * Article.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var _ = require('lodash');
module.exports = {

  attributes: {
    /*societe_code:{
      type:'string',
      required:true,
      unique:true,

      composite:{
        compositeOn:['societe','code']
      }
    },*/
    societe:{
      type:'string',
      required:true,
      uniqueWith:{
        fields:['code']
      }
    },
    code:{
      type:'string',
      required:true
    }
  },
};

