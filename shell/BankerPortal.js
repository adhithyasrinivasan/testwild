//var casper = require('casper').create();
var x=require("casper").selectXPath;
var uname="admin";
var pw="admin";
var url="http://bankerportal-ylab.b9ad.pro-us-east-1.openshiftapps.com/login.xhtml#no-back-button";
casper.options.viewportSize = { width: 950, height: 950 };
casper.options.silentErrors = true;
casper.options.waitTimeout = 25000;
casper.options.onWaitTimeout = function() {
    this.capture('timeout.png');
    this.exit(1);
};
casper.test.begin('Open BankerPortal,navigate to Users Page and check whether username is present in users list',function suite(test) 
{
	casper.start(url,function()
	{
		var elementExists;
		console.log("Entering into BankerPortal login page");
		test.assertTitle('Bankers Portal','Login Page might be loaded correctly ');
		this.evaluate(function(username,password)
		{
			this.document.getElementById("j_username").value=username;
	  		this.document.getElementById("j_password").value=password;		
			$("input.btn.btn-success").click();
		},uname,pw);
		//Checking for Change Password link in ui
		this.test.assertExists("#j_idt16");
	});
	casper.waitForText("User Management");
	casper.then(function()
        {
                this.echo('click user management link');
		casper.click(x("//*[@id='menu_us']"));
        });
	//Checking for Add user Button in ui
	casper.waitUntilVisible('input.btn.btn-default');
	casper.then(function()
	{
		var verbs = casper.evaluate(function () 
		{
        		return [].map.call(__utils__.findAll('tr.ui-widget-content > td:nth-child(3)'), function (e) { return e.innerHTML.trim(); });
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
