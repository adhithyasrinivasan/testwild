from random import randint
import random
import string
import numpy as np
import csv
import sdnid as sdndata

def id_generator(size=8, chars=string.digits):
    return ''.join(random.choice(chars) for _ in range(size))

def string_generator(size=8, chars=string.ascii_lowercase):
    return ''.join(random.choice(chars) for _ in range(size))

def random_generator(size,chars):
    return ''.join(random.choice(chars) for _ in range(size))

def formList(x):
    list=[]
    list.append('12247878')
    list.append('AED')
    list.append('918449958778')
    list.append('08/03/2018')
    list.append('500')
    list.append('AED')
    participantAcno = x
    list.append(participantAcno)
    participantName='Saravanan'+str(x)
    list.append(participantName)
    list.append('Great canal street')
    list.append('Topeka')
    list.append('CN')
    list.append('HSBCHKHHHKH')
    list.append('')
    list.append('')
    list.append('HSBC BANK')
    list.append('')
    list.append('')
    list.append('')
    list.append('')
    list.append('HK')
    beneficiaryAcNO=x
    list.append(beneficiaryAcNO)
    list.append('ACTNO')
    beneName='Adhithya'+str(x)
    list.append(beneName)
    list.append('Making Street')
    list.append('')
    list.append('')
    list.append('guangzhoushi')
    list.append('CN')
    list.append('Making Payment')
    list.append('')
    list.append('')
    list.append('')
    list.append('SHA')
    list.append('')
    list.append('')
    list.append('')
    list.append('CASH')
    list.append('1')
    return list

global dataL
def loadList():
	dataL=sdndata.tt()
	return dataL

def formCsv():
	fileName='-'+string_generator(5)+'.PGP'
	#file = open('TestData.PGP', 'a', newline='')
	file = open('Unique_payoneer_DB_UDF_CSV_50006_00.PGP', 'w', newline='')
	counter=501001
	datat=loadList()
	print(len(datat))
	for i in range(50000):
		counter=counter+1
		#if len(dataL)>i:
		#	print(dataL[i])
		dataList=formList(datat[i])
		#np.savetxt('TestData.PGP',dataList,delimiter=';')
		write = csv.writer(file, delimiter = ";")
		write.writerow(dataList)
	file.flush()
	file.close

#def main():
formCsv()
