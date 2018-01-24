var _ = require('lodash');
module.exports = function(){

    var config={
        typeArticleFini:['PF'],
        typeArticleSemifini:['SF'],
        
        typeArticleMatierePremiere:['MP'],
        
        typeArticleMainOeuvre:['MO'],
        typeArticleInterne:['LI','CH'],
        
        typeArticleWithDescription:function(){
            return [{code:'PF',name:'fini',description:'Produit Fini'},
            {code:'SF',name:'semifini',description:'Produit semi-fini'},
            {code:'CO',name:'composant',description:'Composant'},
            {code:'MP',name:'matiere',description:'Matière première'},
            {code:'MO',name:'mainoeuvre',description:'Main Oeuvre'},
            {code:'TO',name:'tole',description:'Tole',parent:'MP'},
            {code:'PR',name:'profile',description:'profile',parent:'MP'},//IPN,UPE, ...
            {code:'TU',name:'tube',description:'Tube',parent:'MP'},
            {code:'RO',name:'rond',description:'Rond',parent:'MP'},
            {code:'CA',name:'carre',description:'Carre',parent:'MP'},
            {code:'ME',name:'meplat',description:'Meplat',parent:'MP'}]
        },
        
    };
    config.typeArticleFabrique=[].concat(config.typeArticleFini,config.typeArticleSemifini);
    config.typeArticleAchete=['CO','ST'].concat(config.typeArticleMatierePremiere);
    config.typeArticle= [].concat(config.typeArticleFabrique,config.typeArticleAchete,config.typeArticleInterne,config.typeArticleMainOeuvre);
    return config;

}

