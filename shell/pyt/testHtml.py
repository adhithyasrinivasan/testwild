from selenium import webdriver
driver = webdriver.Remote(
  desired_capabilities=webdriver.DesiredCapabilities.HTMLUNIT)
driver.get('http://www.google.com')
