import sys

from textblob import TextBlob

def autocor(name):
    b = TextBlob(name)
    print b.correct()


print sys.argv
autocor(sys.argv[1])
