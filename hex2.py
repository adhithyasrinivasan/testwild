with open('data.csv','a') as file:

        for i in range(65536):
                s='%X' % i
                s='\\u'+s
                s=s[2:].zfill(4)
                s='\\u'+s
                file.write(s)
                file.write('\n')
                print(s)
