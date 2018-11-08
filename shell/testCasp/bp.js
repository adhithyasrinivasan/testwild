var x = require('casper').selectXPath;
casper.options.viewportSize = {width: 1600, height: 810};
casper.options.waitTimeout = 25000;
casper.options.logLevel='debug';
casper.test.begin('Resurrection test', function(test) {
   casper.start('http://ycore-ylab.b9ad.pro-us-east-1.openshiftapps.com/');
   casper.capture('test.png');
casper.waitForSelector("form#loginForm input[name='username']",
       function success() {
           test.assertExists("form#loginForm input[name='username']");
           this.click("form#loginForm input[name='username']");
       },
       function fail() {
           test.assertExists("form#loginForm input[name='username']");
   });
   casper.waitForSelector("input[name='username']",
       function success() {
           this.sendKeys("input[name='username']", "admin@yantra.com");
       },
       function fail() {
           test.assertExists("input[name='username']");
   });
   casper.waitForSelector("input[name='password']",
       function success() {
           this.sendKeys("input[name='password']", "Test@123\r");
       },
       function fail() {
           test.assertExists("input[name='password']");
   });
   casper.waitForSelector("form#loginForm button",
       function success() {
           test.assertExists("form#loginForm button");
           this.click("form#loginForm button");
       },
       function fail() {
           test.assertExists("form#loginForm button");
   });
   /* submit form */
   casper.waitForSelector(x("//a[normalize-space(text())='User Management']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='User Management']"));
           this.click(x("//a[normalize-space(text())='User Management']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='User Management']"));
   });
   casper.waitForSelector("mat-row:nth-child(2) .fas.fa-eye",
       function success() {
           test.assertExists("mat-row:nth-child(2) .fas.fa-eye");
           this.click("mat-row:nth-child(2) .fas.fa-eye");
       },
       function fail() {
           test.assertExists("mat-row:nth-child(2) .fas.fa-eye");
   });
   casper.waitForSelector(".mat-raised-button .mat-button-wrapper",
       function success() {
           test.assertExists(".mat-raised-button .mat-button-wrapper");
           this.click(".mat-raised-button .mat-button-wrapper");
       },
       function fail() {
           test.assertExists(".mat-raised-button .mat-button-wrapper");
   });
   casper.waitForSelector(x("//a[normalize-space(text())='LOGOUT']"),
       function success() {
           test.assertExists(x("//a[normalize-space(text())='LOGOUT']"));
           this.click(x("//a[normalize-space(text())='LOGOUT']"));
       },
       function fail() {
           test.assertExists(x("//a[normalize-space(text())='LOGOUT']"));
   });

   casper.run(function() {test.done();});
});
