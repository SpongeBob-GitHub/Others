#!/usr/bin/python
# -*- coding: UTF-8 -*-

import sys, getopt

def main(argv):
    inputfile = ''
    outputfile = ''
    try:
        opts, args = getopt.getopt(argv,"hi:o:",["ifile=","ofile="])
    except getopt.GetoptError:
        print 'test.py -i <inputfile> -o <outputfile>'
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
           print 'test.py -i <inputfile> -o <outputfile>'
           sys.exit()
        elif opt in ("-i", "--ifile"):
           inputfile = arg
        elif opt in ("-o", "--ofile"):
           outputfile = arg
    print '输入的文件为：', inputfile
    print '输出的文件为：', outputfile

if __name__ == "__main__":
    main(sys.argv[1:])
