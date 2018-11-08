num=6
result=False
if num>1:
    for i in range(2,num):
        if (num%i)==0:
            print("It is not a prime")
            break
    else:
        print("It is a prime")  
