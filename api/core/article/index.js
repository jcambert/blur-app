var config = require('../config/index');
var _ = require('lodash');
var promise = require('bluebird');
module.exports = function() {
    var self = this;
    var _cache = {};
    return {
        estFabrique: function(article) {
            return article.type in config.typeArticleFabrique;
        },
        estAchete: function(article) {
            return article.type in config.typeArticleAchete;
        },
        estMainOeuvre: function(article) {
            return article.type in config.typeArticleMainOeuvre;
        },
        estFini: function(article) {
            return article.type in config.typeArticleFini;
        },
        estSemiFini: function(article) {
            return article.type in config.typeArticleSemifini;
        },
        estMatierePremiere: function(article) {
            return article.type in config.typeArticleMatierePremiere;
        },
        estTole: function(article) {},
        est: function(what, type, article) {
            if (!(what in _cache)) {
                Typearticle.findOne({ name: what }).exec(function(err, type) {
                    if (!err && !_.isUndefined(type))
                        _cache[what] = result;
                });
            }
            return article[type] == _cache[what].code;
        },
        estSousTypeValide: function(article) {
            /* if(this.estMatierePremiere(article)){
                    if(_.isUndefined(article.matiere))return false;
                    if()
                }*/
            return true;
        }
    }
}