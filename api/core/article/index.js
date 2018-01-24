

var config = require('../config/index')();
var _ = require('lodash');
var Promise = require('bluebird');

module.exports = function() {
    var self = this;
    var _cache = {};
    self.estFabrique= function(article) {
        return _.indexOf(config.typeArticleFabrique,article.type)>-1;//article.type in config.typeArticleFabrique;
    },
    self.estAchete= function(article) {
        return _.indexOf(config.typeArticleAchete,article.type)>-1;// article.type in config.typeArticleAchete;
    },
    self.estMainOeuvre= function(article) {
        return _.indexOf(config.typeArticleMainOeuvre,article.type)>-1;// article.type in config.typeArticleMainOeuvre;
    },
    self.estFini= function(article) {
        return _.indexOf(config.typeArticleFini,article.type)>-1;//article.type in config.typeArticleFini;
    },
    self.estSemiFini= function(article) {
        return _.indexOf(config.typeArticleSemifini,article.type)>-1;//article.type in config.typeArticleSemifini;
    },
    self.estMatierePremiere= function(article) {
        return _.indexOf(config.typeArticleMatierePremiere,article.type)>-1;//article.type in config.typeArticleMatierePremiere;
    },
    self.estTole= function(article) {
        return estMatierePremiere(article) && est('TO','stype',article)
    },
    self.estProfile= function(article) {
        return estMatierePremiere(article) && est('PR','stype',article)
    },
    self.estTube = function(article) {
        return estMatierePremiere(article) && est('TU','stype',article)
    },
    self.est = function(what, type, article) {
        return article[type]==what;
    },
    self.checkField = function(article){
        if(_.isUndefined(article[this.field])) 
            return this.message;
        return "";
    }
    ;
    return {
        checkConsistency:function(article){
            var result={};
           var checkType=function(){
                return new Promise(function(resolve,reject){
                    Typearticle.findOne({code:article.type}).then(function(type){
                        if(_.isUndefined(type))return reject("Le type "+article.type+" n'est pas supporté");
                        result=_.assign(result,{article:article,type:type});
                        return resolve(result);
                    });
                });
                
           };
           var checkstype=function(){
                return new Promise(function(resolve,reject){
                    if(_.isUndefined(article.stype))return resolve(result);
                    Typearticle.findOne({code:article.stype}).populate('parent').then(function(type){
                        if(_.isUndefined(type))return reject("Le type "+article.stype+" n'est pas supporté");
                        if(type.parent.code != article.type)
                            return reject("Le sous-type "+article.stype+" n'est pas supporté par son parent "+type.parent.code);
                        result=_.assign(result,{stype:type});
                        return resolve(result);
                    })
                });
           };
           var checkTole = function(){
               return new Promise(function(resolve,reject){
                    if(_.isUndefined(article.stype) || !self.estTole(article))return resolve(result);
                    
                    fields=[{field:'longueur',message:"La longueur d'une tole doit etre spécifiée"},
                            {field:'largeur',message:"La largeur d'une tole doit etre spécifiée"},
                            {field:'epaisseur',message:"L'epaisseur d'une tole doit etre spécifiée"},
                            {field:'matiere',message:"La matiere d'une tole doit etre spécifiée"}];
                    var messages=_.invokeMap(fields,self.checkField,article);
                    _.remove(messages,function(m){return m.length==0;});
                   
                    if(messages.length==0){
                        Matiere.findOne({code:article.matiere})
                            .then(function(matiere){
                                article.poids=(article.longueur*article.largeur*article.epaisseur*matiere.densite)/1000000;
                                article.surface=(article.longueur*article.largeur*2)/1000000;
                                return resolve();
                            })
                            .catch(function(err){
                                return reject(err);
                            })
                    }else
                        return reject(messages.join("\n"));
               });
           };

           var checkProfile = function(){
               return new Promise(function(resolve,reject){
                    if(_.isUndefined(article.stype) || !self.estProfile(article))return resolve(result);
                    fields=[{field:'poids',message:"Le poids au metre d'un profile doit etre spécifiée"},
                            {field:'matiere',message:"La matiere d'un profile doit etre spécifiée"}];
                    var messages=_.invokeMap(fields,self.checkField,article);
                    _.remove(messages,function(m){return m.length==0;});
                    if(messages.length==0){
                        return resolve();    
                    }else
                        return reject(messages.join("\n"));
               })
           };

           var checkTube = function(){
               return new Promise(function(resolve,reject){
                    if(_.isUndefined(article.stype) || !self.estTube(article))return resolve(result);
                    fields=[{field:'longueur',message:"La longueur du tube doit etre spécifiée"},
                            {field:'epaisseur',message:"L'epaisseur du tube doit etre spécifiée"},
                            {field:'matiere',message:"La matiere du tube doit etre spécifiée"}];
                    var messages=_.invokeMap(fields,self.checkField,article);
                    _.remove(messages,function(m){return m.length==0;});
                   
                    if(messages.length==0){
                        Matiere.findOne({code:article.matiere})
                            .then(function(matiere){
                                if(_.isUndefined(article.largeur)){//Tube rond
                                    article.poids = ((Math.PI* Math.pow(article.longueur/2,2))-(Math.PI* Math.pow((article.longueur-2*article.epaisseur)/2,2)))*matiere.densite/1000;
                                }
                                //article.poids=(article.longueur*article.largeur*article.epaisseur*matiere.densite)/1000000;
                                //article.surface=(article.longueur*article.largeur*2)/1000000;
                                return resolve();
                            })
                            .catch(function(err){
                                return reject(err);
                            })
                    }else
                        return reject(messages.join("\n"));
               });
           }
          return Promise.join(checkType,checkstype,checkTole,checkProfile,checkTube);
            
        },
        addExtraFields:function(article){
            _.forEach(['estFabrique','estAchete','estMainOeuvre','estFini','estSemiFini','estMatierePremiere','estTole','estProfile','estTube'],function(field){
                article[field] = self[field](article);
            });
            
            return article;
        },
        estFabrique: self.estFabrique,
        estAchete:self.estAchete,
        estMainOeuvre:self.estMainOeuvre,
        estFini: self.estFini,
        estSemiFini: self.estSemiFini,
        estMatierePremiere:self.estMatierePremiere,
        estTole: self.estTole,
        estProfile:self.estProfile,
        estTube:self.estTube,
        est:self.est
       
    }
}