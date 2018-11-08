//var casper = require('casper').create();
var x=require("casper").selectXPath;
var uname="admin@yantra.com";
var pw="Test@123";
var url="http://ycore-ylab.b9ad.pro-us-east-1.openshiftapps.com/";
casper.options.viewportSize = { width: 950, height: 950 };
casper.options.silentErrors = true;
casper.options.waitTimeout = 45000;
casper.options.onWaitTimeout = function() {
    this.capture('timeout.png');
    this.exit(1);
};
casper.test.begin('Open BankerPortal,navigate to Users Page and check whether username is present in users list',function suite(test) 
{
	casper.start(url,function()
	{
		console.log("Entering into BankerPortal login page");
		test.assertTitle('BankerPortal','Login Page might be loaded correctly ');
		/**this.evaluate(function(username,password)
		{
			//this.document.getElementById("j_username").value=username;
	  		//this.document.getElementById("j_password").value=password;		
			$("button.btn.btn-success").click();
		},uname,pw);**/
	});
   	casper.waitForSelector("input[name='username']",
       	function success() 
	{
		this.sendKeys("input[name='username']", uname, { reset: true} );
       	},
       	function fail() 
	{
           	test.assertExists("input[name='username']");
   	});
   	casper.waitForSelector("input[name='password']",
       	function success() 
	{
           	this.sendKeys("input[name='password']", pw,{ reset: true});
       	},
       	function fail() 
	{
           	test.assertExists("input[name='password']");
  	});
   	casper.waitForSelector("form#loginForm button",
       	function success() 
	{
           	test.assertExists("form#loginForm button");
           	this.click("form#loginForm button");
       	},
       	function fail() 
	{
           	test.assertExists("form#loginForm button");
   	});
	casper.waitForText("Customer Management");
	casper.then(function()
        {
                this.echo('click user management link');
		casper.click(x("/html/body/app-root/html/body/div[1]/div[2]/div/div/mat-list/mat-list-item[2]/div/a"));
        });
	//waiting for user rows to be refreshed
	casper.waitForSelector("mat-row.mat-row:nth-child(2) > mat-cell:nth-child(1)");
	casper.then(function()
	{
		var verbs = casper.evaluate(function () 
		{
        		return [].map.call(__utils__.findAll('mat-row.mat-row > mat-cell:nth-child(4)'), function (e) { return e.innerHTML.trim(); });
		});
		var cond=false;
		for(var i=0;i<verbs.length;i++)
                {
			var name=verbs[i];
                       	if(name===uname)
                       	{
				cond=true;
                       	}
                }
		if(cond===true)
			this.test.pass("User present in the list");
		else
			this.test.fail("User not present in list. BankerPortal is not working properly");
	});
	casper.run(function()
	{
		casper.test.done();
	});
});
