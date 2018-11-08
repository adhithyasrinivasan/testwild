import uuid  #importing uuid package
uuidstr=uuid.uuid1() # generating uuid
uuidstr=str(uuidstr) #converting uuid to str
uuidstr=uuidstr.replace('-'.'') #replace - with empty
print (uuidstr) #print uuid
