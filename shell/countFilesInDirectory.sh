#!/bin/bash

wc=`ls -al /home/adhithya/ | wc -l`
echo $wc
if [ $wc -ge 10 ]; then
	echo "test"
else
	echo "else"
fi

