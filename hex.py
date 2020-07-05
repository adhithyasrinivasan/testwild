def calculate_hexi(num):
        list=[]
        while num>0:
                temp=num%16
                num=num//16
                s=list.insert(0,temp) if temp < 10 else list.insert(0,chr(ord('A')-10+temp))
        return ''.join(map(str,list))

for i in range(9999):
        s=str(object='')
        s='\\u'+calculate_hexi(i)
        print(s)
