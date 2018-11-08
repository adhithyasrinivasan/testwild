var casper = require('casper').create({
    verbose: true,
    logLevel: "debug",
    javascriptEnabled:true,
	webSecurityEnabled: false

});
casper.options.waitTimeout=45000;
casper.options.remoteScripts=["inline.bundle.js","polyfills.bundle.js","styles.bundle.js","vendor.bundle.js","main.bundle.js"];
var url ="http://ycore-ylab.b9ad.pro-us-east-1.openshiftapps.com/";
url="http://localhost:4200/";
casper.on("remote.message", function(msg) {
    this.echo("Console: " + msg);
});

casper.on("page.error", function(msg, trace) {
    this.echo("Error: " + msg);
});

casper.on("resource.error", function(resourceError) {
    this.echo("ResourceError: " + JSON.stringify(resourceError, undefined, 4));
});

casper.on("page.initialized", function(page) {
    page.onResourceTimeout = function(request) {
        console.log('Response Timeout (#' + request.id + '): ' + JSON.stringify(request));
    };
});

casper.start(url,function(){
       this.capture ('FILES/screen_1.png');
        this.echo ('Page loaded.');
    
});
casper.run();
