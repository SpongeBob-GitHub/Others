# coding='UTF-8'
from bs4 import BeautifulSoup  # 引入beautifulsoup 解析html事半功倍
import re
import urllib
import urllib.request
url = 'http://t66y.com/htm_data/20/1705/2401324.html'
urlop = urllib.request.urlopen(url)
html = urlop.read().decode()
print(html)
soup = BeautifulSoup(html)
data = gethtml(soup)
