import requests
from datetime import datetime

#response = requests.get("https://web.freshchat.com/",stream=True)

#print(response.raw._connection.sock)

#print(response.raw._connection.sock.getpeername())


while True:
        response=requests.get("https://web.freshchat.com/",stream=True)
        print(response.raw._connection.sock.getpeername())
        print(response.raw._connection.sock)
        print(datetime.now().strftime("%H:%M:%S:%s"))
        if (response.raw._connection.sock.getpeername())[0]=='52.202.53.156':
                break
