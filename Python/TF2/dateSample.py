import datetime
import time
start_time = datetime.datetime.now().time().strftime('%H:%M:%S')
time.sleep(10)
end_time = datetime.datetime.now().time().strftime('%H:%M:%S')
total_time=(datetime.datetime.strptime(end_time,'%H:%M:%S') - datetime.datetime.strptime(start_time,'%H:%M:%S'))
print (total_time)
