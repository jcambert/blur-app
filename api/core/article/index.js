var config = require('../config/index');
var _ = require('lodash');
module.exports = function(){
    var self=this;
    return {
        estFabrique:function(article){
            return article.type in config.typeArticleFabrique;
        },
        estAchete:function(article){
            return article.type in config.typeArticleAchete;
        },
        estMainOeuvre:function(article){
            return article.type in config.typeArticleMainOeuvre;
        },
        estFini:function(article){
            return article.type  in config.typeArticleFini;
        },
        estSemiFini:function(article){
            return article.type  in config.typeArticleSemifini;
        },
        estMatierePremiere:function(article){
            return article.type in config.typeArticleMatierePremiere;
        },
        estTole:function(article){
          //  _.find(config.sousTypeMatierePremiere,{'code':'TO'})
           // return article.stype in config.
        },
        est:function(what,type,article){
            if(!( what in self._cache)){
                var result = _.find(config.sousTypeMatierePremiere,{'name':what});
                if(!_.isUndefined(result))self._cache[what]=result;
            }
            return article[type] == self._cache[what].code;
        },
        estSousTypeValide:function(article){
        /* if(this.estMatierePremiere(article)){
                if(_.isUndefined(article.matiere))return false;
                if()
            }*/
            return true;
        }
    }
}