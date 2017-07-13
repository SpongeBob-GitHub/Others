import time
import os
from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')  # Optional argument, if not specified will search path.
driver.get('http://t66y.com/thread0806.php?fid=20')

cdriver = webdriver.Chrome('./chromedriver')

postsPath =r'.'+ os.sep+'source'+os.sep+'_posts'+os.sep

class Post:
    __slots__ = ('tags', 'categorie', 'title', 'content')
    def __init__(self, tags, categorie, title, content):
        self.tags = tags
        self.categorie = categorie
        self.title = title
        self.content = content

    def WriteMDFile(self):
        fileName = r'%s%s.md'%(postsPath,self.title)
        print('写入 %s 成功'%(fileName))
        with open(fileName, 'a+', encoding='utf-8') as f:
            f.writelines([
                '---\n',
                'title: ' + self.title + '\n',
                'date: ' + time.strftime('%F %T') + '\n',
                'categories: ' + self.categorie + '\n',
                'tags: ' + self.tags + '\n',
                '---\n',
                self.content
            ])
# time.sleep(5) # Let the user actually see something!
mylist = driver.find_elements_by_css_selector('.tr3 h3 a[href*=".html"]')
for item in mylist:
    url = item.get_attribute('href')
    cdriver.get(url)
    content = cdriver.find_element_by_css_selector('.tpc_content.do_not_catch').text
    title = item.text.replace('/', '')
    Post('[草榴]', '黄色小说', title, content).WriteMDFile()
# search_box.send_keys('ChromeDriver')
# search_box.submit()
# time.sleep(5) # Let the user actually see something!
driver.quit()
