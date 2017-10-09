/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    /*get:function(req,res){

    },*/
    /**
     * @swagger
     *  all:
     *      get:
     *          description: Returns all employees
     */
    all: function(req, res) {
        Employee.find()
            .then(function(employees) {
                return res.json(employees);
            })
            .catch(function(err) {
                return res.badRequest(err);
            });
    },
    lock: function(req, res) {
        if (req.isSocket && req.method == 'POST') {

            User.findOne({ id: req.session.passport.user }).exec(
                function(err, user) {
                    if (err) return res.badRequest();
                    if (user == null) return res.badRequest();
                    Employee.findOne({ id: id }).exec(function(err, entity) {
                        if (err) return res.badRequest();
                        entity.lock = true;
                        entity.lockby = user.username;
                        entity.save(function() {
                            //model.publishUpdate(id, req);
                            return res.ok();
                        });
                    });
                }
            );
        } else
            return res.badRequest();

    }
};