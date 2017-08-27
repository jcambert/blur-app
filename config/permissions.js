// config/permissions.js

var _ = require('lodash');
var _super = require('sails-permissions/config/permissions');

_.merge(exports, _super);
_.merge(exports, {
    _hookTimeout: 60000, // I used 60 seconds as my new timeout

    // Extend with custom logic here by adding additional fields, methods, etc.
    adminUsername: 'Administrateur',
    //adminEmail: 'admin@example.com',
    //adminPassword: 'admin1234',

});