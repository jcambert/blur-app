/**
 * Typearticle.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var config = require('../core/config/index.js');
module.exports = {

  attributes: {
    code:{
      primaryKey: true,
      type:'string',
      //enum: config.typeArticle()
    },
    name:{
      type:'string',
      required:true,
    },
    parent:{
      model:'typearticle',
    },
    childs:{
      collection:'typearticle',
      via:'parent'
    },
    description:{
      type:'string'
    },
    fields:{
      type:'array'
    }
  },
  seedData:config.typeArticleWithDescription()
};

