//var casper = require('casper').create();
var x=require("casper").selectXPath;
var uname="admin";
var pw="admin";
var url="http://yrms-ylab.b9ad.pro-us-east-1.openshiftapps.com/";
casper.options.viewportSize = { width: 950, height: 950 };
casper.options.silentErrors = true;
casper.options.waitTimeout = 25000;
casper.options.onWaitTimeout = function() {
    this.capture('timeout.png');
    this.exit(1);
};
casper.test.begin('Open YRMS,Navigate to Users Page and check whether username is present in users list',function suite(test) 
{
	casper.start(url,function()
	{
		console.log("Entering into YRMS login page");
		test.assertTitle('Login','Checking whether YRMS site name is correct');
		this.evaluate(function(username,password)
		{
			this.document.getElementById("username").value=username;
	  		this.document.getElementById("password").value=password;		
			$("input#submit").click();
		},uname,pw);
		this.echo("Login completed");
	});
	//waiting for transaction document link to be visible
	casper.waitUntilVisible('html.no-js body.container header#header div.nav ul li a.nav-popover span.glyphicon.glyphicon-wrench');
	casper.then(function()
        {
                this.echo('click user management link');
		//Click admin Link
		casper.click(x("//header[@id='header']/div[2]/ul/li[9]/a"));
		//click users link
		casper.click(x("/html/body/div[2]/div[2]/div/a[4]"));
        });
	casper.waitForText('User List');
	casper.then(function()
	{
		var verbs = casper.evaluate(function () 
		{
        		return [].map.call(__utils__.findAll('tr > td:nth-child(1)'), function (e) { return e.textContent.trim(); });
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
			this.test.fail("User not present in list. YRMS is not working properly");
	});
	casper.run(function()
	{
		casper.test.done();
	});
});
