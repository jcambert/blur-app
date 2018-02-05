/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    'get /': 'PageController.showPage',
    'get /modules': 'ModuleController.get',
    'get /flash': 'FlashController.get',
    'get /login': {
        view: 'login',
        locals: {
            layout: 'layouts/login'
        }
    },
    '/test': {
        view: 'test',
        locals: {
            layout: false
        }
    },
    'GET /welcome': function(req, res, next) {
        if (req.isSocket && req.method == 'GET') {
            _.forEach(sails.models, function(model) {
                model.watch(req.socket);

            });
            sails.sockets.join(req.socket, req.params.appid);
            //Article.watch(req.socket);
            sails.sockets.broadcast(req.params.appid, 'welcome', { greeting: 'Hola!' });
            return res.json({ message: 'Welcome' });
        }
    },

    'PUT /lock/employee/:id': function(req, res, next) {

        if (req.isSocket && req.method == 'PUT') {
            // var model = sails.models[req.params['model']];
            var id = req.params['id'];
            User.findOne({ id: req.session.passport.user }).exec(
                function(err, user) {
                    if (err) return res.badRequest();
                    if (user == null) return res.badRequest();
                    Employee.findOne({ id: id }).exec(function(err, entity) {
                        if (err) return res.badRequest();
                        entity.lock = true;
                        entity.lockby = user.username;
                        entity.save(function() {
                            Employee.publishUpdate(id, { lock: { lock: true, lockby: user.username } }, req);
                            return res.ok();
                        });
                    });
                }
            );


        } else
            return res.badRequest();
    },
    'PUT /unlock/employee/:id': function(req, res, next) {
        if (req.isSocket && req.method == 'PUT') {
            // var model = sails.models[req.params['model']];
            var id = req.params['id'];
            Employee.findOne({ id: id }).exec(function(err, entity) {
                if (err) return res.badRequest();
                var old = entity.lockby;
                entity.lock = false;
                entity.lockby = "";
                entity.save(function() {
                    //model.publishUpdate(id, req);
                    Employee.publishUpdate(id, { lock: { lock: false, lockby: old } }, req);
                    return res.ok();
                });
            });

        } else
            return res.badRequest();
    },
    'GET /employee/badge/:badge' : 'EmployeeController.bybadge',
    'GET /employeewithpresence/:badge' : 'EmployeeController.withpresence',
    'GET /presence/employe/:employee' : 'PresenceController.findByEmployee',
    //'POST /presence/add/:id' : 'PresenceController.add',
    'GET /now' : 'TimeController.now',
    'POST /configurateur/create' :'ConfigurateurController.create',
    'GET /configurateur/start/:id' : 'ConfigurateurController.start',
    'POST /configurateur/step' : 'ConfigurateurController.step'
    

    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};