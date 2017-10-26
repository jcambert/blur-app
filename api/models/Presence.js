/**
 * Presence.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var uuid=require('uuid');
var moment=require('moment');
module.exports = {

    attributes: {
        id: {
            type: 'string',
            primaryKey: true,
            required: true,
            defaultsTo: function() {
                return uuid.v4();
            }
        },
       /* date:{
            type:'date',
            required:true,
        },*/
        heureEntree: {
            type: 'datetime',
          //  isTime:true
        },
        heureSortie:{
            type: 'datetime',
           // isTime:true,
        },
      /*  sens: {
            type: 'string',
            required: true,
            enum: ['entree', 'sortie']
        },*/
        employee: {
            model: 'employee'
        }
    },
    seedData: [ { employee:'b1cfb70a-c13f-4fce-b57a-91ca34ccd350', heureEntree:new moment("08:00",'HHm:mm').toDate(), heureSortie:new moment("18:00",'HHm:mm').toDate()}],
  /*  types:{
        isTime:function(value){
            var d=new moment(value,'HH:mm:ss');
            return d;
        }
    }*/
};