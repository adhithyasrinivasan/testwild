import itertools
import time
input="AAAAA"
list1=['A','A','A','A','A']
newword=""
chararray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
for i in range(len(list1)):
    d=list1[i]
    for j in range(len(chararray)):
        newlist=list1
        newlist[i]=chararray[j]
        #print(newlist)
    newlist[i]=d
start=time.time()

for i in list(itertools.combinations_with_replacement(chararray, 5)):
    print(str(i))
print("Start time",start)
print("End time",time.time())