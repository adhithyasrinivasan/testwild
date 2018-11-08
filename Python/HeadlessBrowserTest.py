from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
import pyotp
import time
def generateOtp():
	totp = pyotp.TOTP('OZQ4BLXDVBK2SH3N')
	print(totp.now())
	return totp.now() 
def enable_download_in_headless_chrome(driver, download_dir):
	driver.command_executor._commands["send_command"] = ("POST", '/session/$sessionId/chromium/send_command')
	params = {'cmd': 'Page.setDownloadBehavior', 'params': {'behavior': 'allow', 'downloadPath': download_dir}}
	command_result = driver.execute("send_command", params)
	print("response from browser:")
	for key in command_result:
		print("result:" + key + ":" + str(command_result[key]))
chrome_options = Options()
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--headless')
chrome_options.add_experimental_option("prefs", {
  "download.default_directory": "/tmp/",
  "download.prompt_for_download": False,
  "download.directory_upgrade": True,
  "safebrowsing.enabled": True,
  "Browser.setDownloadBehavior":"allow"
})
driver = webdriver.Chrome("./chromedriver",chrome_options=chrome_options)
driver.get("https://dbupload.yantracard.com:8443/uploadapp/")
username = driver.find_element_by_css_selector('form.ng-invalid > div:nth-child(2) > input:nth-child(2)')
password = driver.find_element_by_css_selector('div.form-group:nth-child(3) > input:nth-child(2)')
totp=driver.find_element_by_css_selector('form.ng-invalid > div:nth-child(4) > input:nth-child(2)')
loginbutton=driver.find_element_by_css_selector('button.btn:nth-child(5)')
username.clear()
username.send_keys('s.adhithya@finateltech.in')
username.send_keys(Keys.RETURN)
password.clear()
password.send_keys('YeO5XIAAhv7')
password.send_keys(Keys.RETURN)
totp.clear()
totp.send_keys(generateOtp())
loginbutton.click()
element = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CSS_SELECTOR, "button.btn:nth-child(3)")))
time.sleep(5)
tableRows=driver.find_elements_by_xpath('//tr[@ng-repeat="f in filess"]')
enable_download_in_headless_chrome(driver,"/tmp")
for tableRow in tableRows:
	tableColumns=tableRow.find_elements_by_tag_name('td')#
	for tableColumn in tableColumns:
		if tableColumn.get_attribute('innerHTML')=='test.txt':
			tableRow.find_element_by_tag_name('span').click()
			break
			


driver.quit()

