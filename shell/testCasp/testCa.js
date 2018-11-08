var x = require('casper').selectXPath;
casper.options.logLevel='debug';
casper.options.verbose=true;

casper.options.viewportSize = {width: 1600, height: 810};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('http://localhost:4200/');
   casper.waitForSelector(x("//a[normalize-space(text())='Tour of Heroes']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='Tour of Heroes']"));
           this.click(x("//a[normalize-space(text())='Tour of Heroes']"));
	    
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='Tour of Heroes']"));
   });

   casper.run(function() {test.done();});
});
