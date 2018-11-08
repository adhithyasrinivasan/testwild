#! /bin/bash

bpUrl="http://bankerportal-ylab.b9ad.pro-us-east-1.openshiftapps.com/health.html"

function testCurlBP()
{
	okStatus=`curl $bpUrl | grep 'OK'` 
	[ $okStatus == "OK" ] && echo 'Pass' || echo 'Fail'
}

testCurlBP;
