num=1234321
orig=num
rev=0
while num>0:
    temp=num%10
    rev=(rev*10)+temp
    num//=10
if orig==rev:
    print("palindrome")
else :
    print("not a palindrome")