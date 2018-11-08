num=153
orig=num
sum=0
while num>0:
    digit=num%10
    sum=sum+digit*digit*digit
    num=num//10
if sum==orig:
    print(True)
else:
    print(False)


