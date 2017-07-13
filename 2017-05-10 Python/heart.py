#!/usr/bin/python
# -*- coding: UTF-8 -*-

'''在python中，for循环后的in跟随一个序列的话，循环每次使用的序列元素，而不是序列
    的下标'''
s = 'qazxswedcvfr'
for i in range(0,len(s),2):
    print s[i]
'''enumerate() :
    在每次循环中，可以同时得到下标和元素
    际上，enumerate(),在每次循环中返回的是包含每个元素的定值表，两个元素分别赋值
    index，char'''
for (index,char) in enumerate(s):
    print "index=%s ,char=%s" % (index,char)
