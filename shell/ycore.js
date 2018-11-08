//var casper = require('casper').create();
var x=require("casper").selectXPath;
casper.options.viewportSize = { width: 950, height: 950 };
casper.options.silentErrors = true;
casper.options.waitTimeout = 25000;
casper.options.onWaitTimeout = function() {
    this.capture('timeout.png');
    this.exit(1);
};
casper.test.begin('Testing ycore functionality',function suite(test) 
{
	casper.start("http://ycore-ylab.b9ad.pro-us-east-1.openshiftapps.com/labels",function()
	{
		this.test.assertHttpStatus(200);
		this.test.assertEquals(this.currentResponse.headers.get('Content-Type'), 'application/json;charset=UTF-8');
		$json = JSON.parse(this.getPageContent());
		this.test.pass('JSON is valid');
		if($json.length>0)
			this.test.pass("Data present in labels");
		else
			this.test.fail("Failed");
	});
	casper.run(function()
	{
		casper.test.done();
	});
});
