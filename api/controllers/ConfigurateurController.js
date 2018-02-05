/**
 * ConfigurateurController
 *
 * @description :: Server-side logic for managing configurateurs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var erp = require('../core/index');
module.exports = {
    create:function(req,res){

        return res.ok();
    },
    start:function(req,res){
        var code = req.params.id;
        erp.debug(req.params);
        //erp.debug('code',code);
        Article.findOne({societe_code:code}).exec(function(err,article){
            if(err)
                return res.badRequest(err);
            if(_.isUndefined(article))
                return res.badRequest("Cet article n'existe pas");
            if(_.isUndefined(article.configuration))
                return res.badRequest("Cet article n'est pas configurable");
            return res.json({article:article,step:0})
        })
    },
    step: function(req,res){
        var code = req.params['code'];
        var step = req.params['step'];
        erp.debug(req.allParams().code);
        erp.debug('code',code);
        erp.debug('step',step);
        return res.ok();
    }
};

