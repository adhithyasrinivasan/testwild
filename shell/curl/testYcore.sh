#! /bin/bash

ycoreUrl="http://ycore-ylab.b9ad.pro-us-east-1.openshiftapps.com/health.html"

function testCurlYcore()
{
	okStatus=`curl $ycoreUrl | grep 'OK'` 
	[ $okStatus == "OK" ] && echo 'Pass' || echo 'Fail'
}

testCurlYcore;
