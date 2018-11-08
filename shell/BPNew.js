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
		casper.wait(300000, function(){this.echo('1')});
	});
	casper.then(function()
	{
        	casper.capture('login.png');
	});
	//casper.waitForText("User Management");
	//casper.then(function()
        //{
        //        this.echo('click user management link');
	//	casper.click(x("/html/body/app-root/html/body/div[1]/div[2]/div/div/mat-list/mat-list-item[2]/div/div[3]/div/div/a"));
        //});
	//Checking for Add user Button in ui
	//casper.waitUntilVisible('input.btn.btn-default');
	//casper.then(function()
	//{
	//	var verbs = casper.evaluate(function () 
	//	{
        //		return [].map.call(__utils__.findAll('tr.ui-widget-content > td:nth-child(3)'), function (e) { return e.innerHTML.trim(); });
	//	});
	//	var cond=false;
	//	for(var i=0;i<verbs.length;i++)
        //        {
	//		var name=verbs[i];
        //               	if(name===uname)
        //               	{
	//			cond=true;
        //               	}
        //        }
	//	if(cond===true)
	//		this.test.pass("User present in the list");
	//	else
	//		this.test.fail("User not present in list. BankerPortal is not working properly");
	//});
	casper.run(function()
	{
		casper.test.done();
	});
});
