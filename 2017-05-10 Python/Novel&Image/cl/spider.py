import time
import os
from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')  # Optional argument, if not specified will search path.
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
count = 6
while count < 23:
    driver.get('http://t66y.com/thread0806.php?fid=20&search=&page=%d'%(count))
    tals = driver.find_elements_by_css_selector('.tal')
    for item in tals:
        try:
            categorie = item.text.split(']')[0].replace('[', '')
            if categorie == '':
                categorie = '其他'
            a = item.find_element_by_css_selector('h3 a')
            url = a.get_attribute('href')
            title = a.text.replace('/', '')
            print(categorie)
            print(title)
            cdriver.get(url)
            content = cdriver.find_element_by_css_selector('.tpc_content.do_not_catch').text
            Post('[草榴]', categorie, title, content).WriteMDFile()
        except Exception as e:
            continue
    count +=1
    pass

driver.quit()
cdriver.quit()
