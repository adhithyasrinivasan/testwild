import csv
num={}
for i in range(15001):
	if(i%3==0 and i%5!=0):
		num[i]=1
	elif(i%3!=0 and i%5==0):
		num[i]=2
	elif(i%3==0 and i%5==0):
		num[i]=3
	else:
		num[i]=0
with open('my_file.csv', 'w') as f:
    [f.write('{0},{1}\n'.format(key, value)) for key, value in num.items()]
