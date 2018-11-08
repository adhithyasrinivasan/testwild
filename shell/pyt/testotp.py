import pyotp
import time
totp = pyotp.TOTP('OZQ4BLXDVBK2SH3N')
totp.now() # => '492039'
print(totp.now())


