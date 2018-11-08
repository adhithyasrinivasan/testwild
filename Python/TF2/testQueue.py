import pika
import json
import time
import datetime
from formRequest import formRequest
i=1
n=10
connection = pika.BlockingConnection()
channel = connection.channel()
start_time = datetime.datetime.now().time().strftime('%H:%M:%S')
#getTime = lambda: int(round(time.time() * 1000))
#dt=datetime.now()
#startTime=dt.microsecond
#startTime = int(round(time.time() * 1000))
def callReq():
	print("calling");
	json=formRequest()
	return json;
print("Start time :",start_time)
while i<=n:
	json_data=callReq();
	print(json_data)
	print("Start time for thread",time.time())
	channel.basic_publish("", "NameScanQ", json_data, properties=None, mandatory=False, immediate=False)
	i=i+1
	method_frame, header_frame, body = channel.basic_get('NameScanQ')
	while method_frame:
		print(body.decode())
		print("End time for thread",time.time())
		break
#dt=datetime.now()
#endTime=dt.microsecond
end_time = datetime.datetime.now().time().strftime('%H:%M:%S')
total_time=(datetime.datetime.strptime(end_time,'%H:%M:%S') - datetime.datetime.strptime(start_time,'%H:%M:%S'))
#endTime = int(round(time.time() * 1000))
print("End time :",end_time)
print("TotalTime :",total_time)
connection.close()
