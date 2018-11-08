import pika
import time
i=1
connection = pika.BlockingConnection()
channel = connection.channel()
while i<=10:
        print("Start time",time.time())
        channel.basic_publish("", "NameScanQ", "test", properties=None, mandatory=False, immediate=False)
        i=i+1
        method_frame, header_frame, body = channel.basic_get('NameScanQ')
        while method_frame:
                print(body.decode())
                print("End time",time.time())
                break
connection.close()


