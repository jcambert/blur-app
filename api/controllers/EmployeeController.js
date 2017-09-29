/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * @swagger
     *  all:
     *      get:
     *          description: Returns all employees
     */
	all:function(req,res){
        Employee.find()
                .then(function(employees){
                    return res.json(employees);
                })
                .catch(function(err){
                    return res.badRequest(err);
                })
    }
};

