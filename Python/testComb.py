import time

ch=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']
string=""
startTime=time.time()

for i in range(len(ch)):
    for j in range(len(ch)):
        for k in range(len(ch)):
            for l in range(len(ch)):
                for m in range(len(ch)):
                    if (i==j or i==k or i==l or i==m or j==k or j==l or j==m or l==m):
                        string=string+ch[i]+ch[j]+ch[k]+ch[l]+ch[m]
                        print(string)
                        string=""
endTime=time.time()
print("Start time",startTime)
print("End time",endTime)