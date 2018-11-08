//var casper = require('casper').create();
var x=require("casper").selectXPath;
var uname="s.adhithya@finateltech.in";
var pw="YeO5XIAAhv7";
var url="https://dbupload.yantracard.com:8443/uploadapp/";
casper.options.viewportSize = { width: 950, height: 950 };
casper.options.silentErrors = true;
casper.options.waitTimeout = 10000;
casper.options.onWaitTimeout = function() {
    this.capture('timeout.png');
    this.exit(1);
};
var token=casper.cli.get('totp');
//var key = require('../proxy/speakeasy');
/**var secret='OZQ4BLXDVBK2SH3N';
function generateTotp(){
	var token = key.totp({
  		secret: secret.base32,
 		encoding: 'base32'
	});
	return token;
}**/
casper.test.begin('Login',function suite(test) 
{
	casper.start(url,function()
	{
		console.log("Entering into login page");
		test.assertTitle('Upload File','Login Page might be loaded correctly ');
		/**this.evaluate(function(username,password)
		{
			//this.document.getElementById("j_username").value=username;
	  		//this.document.getElementById("j_password").value=password;		
			$("button.btn.btn-success").click();
		},uname,pw);**/
	});
   	casper.waitForSelector("input[ng-model='username']",
       	function success() 
	{
		this.sendKeys("input[ng-model='username']", uname, { reset: true} );
		this.sendKeys("input[ng-model='password']", pw,{ reset: true});
		var tok=casper.cli.raw.get('foo');
		this.sendKeys("input[ng-model='totp']",tok,{ reset: true});
       	},
       	function fail() 
	{
           	test.assertExists("input[ng-model='username']");
   	});
   	casper.waitForSelector("button.btn.btn-primary",
       	function success() 
	{
           	this.click("button.btn.btn-primary");
       	},
       	function fail() 
	{
           	test.assertExists("form#loginForm button");
   	});
	casper.waitForText("No files selected.");
	casper.then(function()
        {
		this.capture("inside.png");
        	casper.click(x("/html/body/div/div[2]/div[4]/table/tbody/tr[21]/td[4]/span"));
		
        });
	//waiting for user rows to be refreshed
	casper.run(function()
	{
		casper.test.done();
	});
});
