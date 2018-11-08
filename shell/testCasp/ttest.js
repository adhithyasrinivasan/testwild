var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1600, height: 810};
casper.on('page.error', function(msg, trace) {
   this.echo('Error: ' + msg, 'ERROR');
   for(var i=0; i<trace.length; i++) {
       var step = trace[i];
       this.echo('   ' + step.file + ' (line ' + step.line + ')', 'ERROR');
   }
});
casper.test.begin('Resurrectio test', function(test) {
   casper.start('https://dbupload.yantracard.com:8443/uploadapp/');
   casper.waitForSelector("input[ng-model='username']",
       function success() {
           this.sendKeys("input[ng-model='username']", "s.adhithya@finateltech.in");
       },
       function fail() {
           test.assertExists("input[ng-model='username']");
   });
   casper.waitForSelector("input[ng-model='password']",
       function success() {
           this.sendKeys("input[ng-model='password']", "YeO5XIAAhV7");
       },
       function fail() {
           test.assertExists(".form-control.ng-pristine.ng-empty.ng-invalid.ng-invalid-required.ng-touched");
   });
   casper.waitForSelector("input[ng-model='totp']",
       function success() {
           this.sendKeys("input[ng-model='totp']",casper.cli.raw.get('foo'));
       },
       function fail() {
           test.assertExists(".form-control.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.ng-valid-pattern.ng-valid-maxlength");
   });
   casper.waitForSelector("button.btn.btn-primary",
       function success() {
           this.click("button.btn.btn-primary");
       },
       function fail() {
           test.assertExists("form[name=loginfrm] form button");
   });
casper.then(function()
        {
		this.capture("test.png");

        });   
/* submit form */
   casper.waitForText("No files selected",
       function success() {
           this.click("tr.ng-scope:nth-child(21) > td:nth-child(4) > span:nth-child(1)");
       },
       function fail() {
           test.assertExists("tr.ng-scope:nth-child(21) > td:nth-child(4) > span:nth-child(1)");
   });
   casper.waitForSelector(x("//a[@href='//dbupload.yantracard.com:8443/edd0d71e-c79d-4287-bdff-3e78f0789086']"),
       function success() {
           test.assertExists(x("//a[@href='//dbupload.yantracard.com:8443/edd0d71e-c79d-4287-bdff-3e78f0789086']"));
           this.click(x("//a[@href='//dbupload.yantracard.com:8443/edd0d71e-c79d-4287-bdff-3e78f0789086']"));
       },
       function fail() {
           test.assertExists(x("//a[@href='//dbupload.yantracard.com:8443/edd0d71e-c79d-4287-bdff-3e78f0789086']"));
   });

   casper.run(function() {test.done();});
});
