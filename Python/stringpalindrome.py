strin="teet"
orig=strin
rev=""
def reve(str):
    if len(str)<=1:
        return str
    return reve(str[1:])+str[0]

if orig==reve(strin):
    print("is a palindrome")
