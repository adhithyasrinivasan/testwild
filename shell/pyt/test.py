import base64, devtools

c = devtools.Client("localhost:9222")
c.page.navigate("http://www.shishnet.org")
b64data = c.page.captureScreenshot()['data']
