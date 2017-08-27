/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var _ = require('lodash');
var _super = require('sails-permissions/api/models/User');

_.merge(exports, _super);
_.merge(exports, {
    attributes: {
        /* firstname: {
             type: 'string',
             required: true,
             defaultsTo: 'None'
         },
         lastname: {
             type: 'string',
             required: true,
             defaultsTo: 'None'
         },*/
        state: {
            type: 'string',
            enum: ['pending', 'approved', 'denied'],
            defaultsTo: 'pending'
        },
        getFirstName: function() {
            return this.username.split(' ')[0];
        },
        getLastName: function() {
            return this.username.split(' ')[1];
        },
        isPending: function() {
            return this.state === 'pending';
        }
    },
    /*attributes: {
      roles: {
        collection: 'Role',
        via: 'users',
        dominant: true
      },
      permissions: {
        collection: "Permission",
        via: "user"
      }
    },*/


    afterValidate: [
        function updatePassword(values, next) {
            // Update the passport password if it was passed in
            if (values.password && this.user && this.user.id) {
                Passport.update({ user: this.user.id, protocol: 'local' }, { password: values.password })
                    .exec(function(err, passport) {
                        delete values.password;
                        next(err);
                    });
            } else {
                next();
            }
        }
    ]
});