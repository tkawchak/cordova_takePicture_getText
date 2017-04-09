from textblob import TextBlob

def autocor(text):
    b = TextBlob(text)
    return b.correct()