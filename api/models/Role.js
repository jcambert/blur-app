/**
 * Role.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var _ = require('lodash');
var _super = require('sails-permissions/api/models/Role');

_.merge(exports, _super);
_.merge(exports, {

  seedData:[]// [{ name: 'administrateur',users:['admin'] }, {name: 'horloge',users:['horloge']  }]
});
