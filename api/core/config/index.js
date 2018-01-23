var _ = require('lodash');
module.exports = {
    typeArticleFini:['PF'],
    typeArticleSemifini:['SF'],
    typeArticleFabrique:[].concat(this.typeArticleFini,this.typeArticleSemifini),
    typeArticleMatierePremiere:['MP'],
    typeArticleAchete:['CO','ST'].concat(this.typeArticleMatierePremiere),
    typeArticleMainOeuvre:['MO'],
    typeArticleInterne:['LI','CH'],
    typeArticle:function(){return [].concat(this.typeArticleFabrique,this.typeArticleAchete,this.typeArticleInterne,this.typeArticleMainOeuvre);},
    typeArticleWithDescription:function(){
        return [{code:'PF',name:'fini',description:'Produit Fini'},
        {code:'SF',name:'semifini',description:'Produit semi-fini'},
        {code:'CO',name:'composant',description:'Composant'},
        {code:'MP',name:'matiere',description:'Matière première'},
        {code:'MO',name:'mainoeuvre',description:'Main Oeuvre'},
        {code:'TO',name:'tole',description:'Tole',parent:'MP'}]
    },
    
    sousType:[
        {
            code:'TO',
            name:"tole",
            parent:'MP',
            fields:[
                {
                    required:true,
                }
            ]
        }
    ]['TO','PR','TU','RO','PL'] //Tole,Profile,Tube,Rond,Plat
}

