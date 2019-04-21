from selenium import webdriver
from time import sleep
import selenium

browser = webdriver.Chrome() 
url = "https://www.twitch.tv/directory/all/tags"
browser.get(url) 

sleep(5)

streamTagContent = '//*[@id="root"]/div/div[1]/div/main/div/div/div[3]/div/div/div[2]/div[1]/div[1]/button'
autoTagContent = '//*[@id="root"]/div/div[1]/div/main/div/div/div[3]/div/div/div[2]/div[1]/div[3]/button'

streamDeselectButton = browser.find_element_by_xpath(streamTagContent)
autoDeselectButton = browser.find_element_by_xpath(autoTagContent)

streamDeselectButton.click()
autoDeselectButton.click()

index = 1
listTags = []

while (True):
    try:
        listTags.append(browser.find_element_by_xpath(f'//*[@id="root"]/div/div[1]/div/main/div/div/div[3]/div/div/div[2]/div[2]/div/div/div[{index}]/div[1]/div/div[2]/a/p'))
        index += 1
    except selenium.common.exceptions.NoSuchElementException:
        #print("No such element exists.")
        break

with open('categories.txt', 'w') as categories:
    for tag in listTags:
        categories.write(tag.text + '\n')
