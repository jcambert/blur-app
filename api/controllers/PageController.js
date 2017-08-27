/**
 * PageController
 *
 * @description :: Server-side logic for Show right page based on auth
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function formatMe(user, authenticated, pending, denied) {
    var _user = _.merge({}, user || {}, { authenticated: authenticated, pending: pending, denied: denied });
    return {
        id: _user.id,
        firstname: _user.firstname,
        lastname: _user.lastname,
        email: _user.email,
        state: _user.state,
        isAdmin: !!_user.admin,
        authenticated: _user.authenticated,
        pending: _user.pending,
        denied: _user.denied

    };
}

function isAdmin(user) {
    return _.findIndex(_.map(user.roles, "name"), function(role) { return role === "admin" }) > -1;
}
module.exports = {
    showPage: function(req, res) {
        sails.log('Rendering Page');

        /*res.locals.layout = 'layouts/dashboard';
        return res.view('dashboard');*/

        res.locals.me = formatMe();
        if (!req.session.authenticated) {
            res.locals.layout = 'layouts/homepage';
            return res.view('homepage');
        }

        User.findOne(req.session.passport.user).populate('roles').exec(function(err, user) {
            if (err) {
                return res.negotiate(err);
            }
            if (!user) {
                sails.log.verbose('Session refer to a user who no longer exist');
                res.locals.layout = 'layouts/homepage';
                return res.view('homepage');
            }

            res.locals.me = formatMe(user, true, user.state === 'pending', user.state === 'denied');
            if (!isAdmin(user) && (res.locals.me.pending || res.locals.me.denied)) {
                sails.log.verbose('User :' + user.username + ' is denied or pending and trying to Dashboard. Redirect to homepage');

                res.locals.layout = 'layouts/homepage';
                return res.view('homepage');

            }
            res.locals.layout = 'layouts/dashboard';
            return res.view('dashboard');
        });
        // return res.view({ layout: 'layout' });

    }
};