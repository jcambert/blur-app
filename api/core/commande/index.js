var _article = require('../article/index');
module.exports = {
    estArticleDeTete:function(article,ligneCommande)  {
        return _article.estArticleFini && ligneCommande.indice ==0;
    }
}