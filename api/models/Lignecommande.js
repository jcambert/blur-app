/**
 * Lignecommande.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var erp = require('../core/index.js');
module.exports = {

  attributes: {
    societe:{
      type:'string',
      required:true,
      uniqueWith:{
        fields:['commande','ligne'],
        uppercase:true
      }
    },
    commande:{
      model:'commande',
      required:true
    },
    ligne:{
      type:'integer',
      required:true,
      min:0
    },
    indice:{
      type:'integer',
      required:true,
      defaultsTo:0,
      min:0
    },
    /* type de la commande */
    type:{
      type:'string',
      required:true,
      enum:['CC','CF','CI']/* CC: Commande client, CF: Commande Fournisseur, CI:Commande Interne */
    },
    article:{
      //type:'json',
      model:'article',
      required:true
    },
    quantite:{
      type:'float',
      min:0.0,
      required:true
    },
    quantiteFaite:{
      type:'float',
      required:true,
      defaultsTo:0.0
    },
    prix:{
      type:'float',
      required:true,
      defaultsTo:0.0
    },
    remise:{ /* en pourcentage */
      type:'float',
      required:true,
      defaultsTo:0.0
    },
    dateLivraison:{
      type:'date',
     // required:true,
    },
    /*AR Uniquemment pour Ofs*/
    ar:{
      model:'commande',
    }
  },

  beforeValidate:function(model,cb){
    /*erp.info(model);
    Commande.findOne({societe_numero:model.commande}).exec(function(err,commande){
      if(err)return cb(err);
      if(_.isUndefined(commande))return cb(new Error('Il n\'y a pas de commande avec le numero '+model.commande ));
      model.type=commande.type;
      model.commande = commande;
      cb();
    });*/
    cb();
  },

  beforeCreate:function(model,cb){
    /* creer le besoin en fonction du type de la commande */
    //erp.info(model);
    Commande.findOne({societe_numero:model.commande}).exec(function(err,commande){
      if(err)return cb(err);
      //erp.info(commande);
      if(_.isUndefined(commande))cb(new Error('Il n\'y a pas de commande avec le numero '+model.commande ));
      model.type=commande.type;
      if(commande.type == 'CC'){
        Article.findOne({societe_code:model.article}).exec(function(err,article){
            if(err)return cb(err);
            if(_.isUndefined(article))cb(new Error('Il n\'y a pas d\'article avec le code '+model.article ));
            article.qteres+=model.quantite;
            article.save(function(err){
              if(err)return cb(err);
              erp.info('update article after commande client:')
              erp.info(article);
              cb();
            });
        });
      }else if(commande.type == 'CF'){
        cb();
      }else if(commande.type == 'CI'){
       
        Article.findOne({societe_code:model.article}).populate('nomenclatures').exec(function(err,article){
            if(err)return cb(err);
            if(_.isUndefined(article))cb(new Error('Il n\'y a pas d\'article avec le code '+model.article ));
            if(! erp.commande.estArticleDeTete(article,model))cb(new Error("Vous ne pouvez creer un Of que sur un article Fabriqué"));
            if(erp.article.estFabrique(article))
              article.qteatt+=model.quantite;
            else if(erp.article.estAchete(article)|| erp.article.estMainOeuvre(article))
              article.qteres+=model.quantité;
            article.save(function(err){
              if(err)return cb(err);
              erp.info('update article after LigneCommane.beforeCreate:')
              erp.info(article);

            /*  */
              cb();
            });
        });
      }else
        cb();
    });

    
    
  },
  afterCreate:function(model,cb){

    var addnomenc = function(ligneCommandeParent,nomenclature){
      var subligne={societe:model.societe,commande:model.commande,ligne:model.ligne,indice:model.indice+1,type:model.type, article:nomenclature.composant,quantite:ligneCommandeParent.quantite*nomenclature.quantite}
    }
    Article.findOne({societe_code:model.article}).populate('nomenclatures').exec(function(err,article){
      if(err)return cb(err);
      if(_.isUndefined(article))cb(new Error('Il n\'y a pas d\'article avec le code '+model.article ));
        _.forEach(article.nomenclatures,function(nomenclature){
          
          if(erp.article.estFabrique(nomenclature.composant)){
            erp.info('[TODO]LigneCommandeModel:afterCreate:ArticleFabrique');

          }else if(erp.article.estAchete(nomenclature.composant)){
            erp.info('[TODO]LigneCommandeModel:afterCreate:ArticleAchete');
          }if(erp.article.estMainOeuvre(nomenclature.composant)){
            erp.info('[TODO]LigneCommandeModel:afterCreate:ArticleMainOeuvre');
          }
          erp.info('[TODO]LigneCommandeModel:afterCreate:AjouterBesoin');
          /*erp.besoin.add({})
            .then(function(besoin){

            })
            .catch(function(err){
              erp.error(err);
            });*/
      });
    });
    cb();
  },
  seedData:[
    {societe:'001',commande:'001:1',ligne:1,type:'CC', article:'001:1234',quantite:10.0},
    {societe:'001',commande:'001:3',ligne:1,type:'CI', article:'001:5678',quantite:10.0,ar:'001:1'}
  ]
};

