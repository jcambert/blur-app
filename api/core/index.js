var events = require('events');
var fs = require('fs');

var erp = {};
erp = new events.EventEmitter();

erp.load = function load() {
    sails.on('lifted', function() {
        // Your post-lift startup code here
        erp.info([erp.name,'Version:',erp.version,' ready'].join(' '));
         // Erp is ready
        erp.emit('erp:ready');
     });
    // require all Erp dependencies
    erp.besoin = require('./besoin/index.js');
    //erp.useractivity = require('./useractivity/index.js');
    //erp.response = require('./response/index.js');
    //erp.client = require('./client/index.js');
    //erp.dp = require('./dp/index.js');
    //erp.locale = require('./locale/index.js');
    erp.config = require('./config/index.js');
    erp.article = require('./article/index.js');
    erp.commande = require('./commande/index.js');
    // get Erp version number
    try {
        var json = JSON.parse(fs.readFileSync('package.json'));
        erp.name = json.name;
        erp.version = json.version;
        erp.description = json.description;
        erp.author = json.author;
        erp.info = sails.log.info;
        erp.error = sails.log.error;
        erp.warn = sails.log.warn;

        
    } catch (e) {
        sails.log.warn('Cannot parse package.json');
    }
    
    // init tasks
    //erp.task.init();
    
    // Erp modules contains all public methods of hooks
    erp.modules = sails.hooks;
    
   
};

if (!String.prototype.format) {
    String.prototype.format = function() {
        var str = this.toString();
        if (!arguments.length)
            return str;
        var args = typeof arguments[0],
            args = (("string" == args || "number" == args) ? arguments : arguments[0]);
        for (arg in args)
            str = str.replace(RegExp("\\{" + arg + "\\}", "gi"), args[arg]);
        return str;
    }
}

module.exports = erp;