var Promise = require('bluebird');
module.exports = function add(besoin){
    return new Promise(function(resolve, reject){
         Besoin.create(besoin)
         .exec(function(err,client){
            
             if (err) {
                    return reject(err);
                }
             resolve(besoin);
         });
        
     });
}