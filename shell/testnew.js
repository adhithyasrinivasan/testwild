var page = require('webpage').create();
page.onResourceError = function(resourceError) {
    page.reason = resourceError.errorString;
    page.reason_url = resourceError.url;
    console.error("Error BankerPortal is not working as expected");
};
 
page.onLoadStarted = function() {
  loadInProgress = true;
  console.log("load started");
};

page.onLoadFinished = function() {
  loadInProgress = false;
  console.log("load finished");
};
page.open('http://bankerportal-ylab.b9ad.pro-us-east-1.openshiftapps.com', function (status) 
{
	page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
	if(status!=="success")
	{
		console.error("error accessing BankerPortal");
		phantom.exit(1);
	}	
	else
	{
		 page.evaluate(function(){
		 document.querySelector("input[id='j_username']").value="admin";
		 document.querySelector("input[id='j_password']").value="admin";		
		 document.querySelector("input[name='j_idt18']").click();
	});
	window.setTimeout(function () {
		page.render("test.png");
	       phantom.exit();}, 5000);
	}
	console.log(page.title);
});
page.evaluate(function()
{
	document.querySelector("a[id='menu_cp']").click();});
});
