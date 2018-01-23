/**
 * sails-hook-events
 *
 * @author     Robert Rossmann <rr.rossmann@me.com>
 * @copyright  2015 Robert Rossmann
 * @license    http://choosealicense.com/licenses/bsd-3-clause  BSD-3-Clause License
 */

'use strict'

module.exports = function eventsHook(sails) {

    return {

        routes:{
            after:{
                'GET /article':function(req,res,next){
                    //sails.log.debug(res);
                    return next();
                }
            }
        }


    }
}
