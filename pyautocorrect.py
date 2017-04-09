from textblob import TextBlob

def autocor():
	text = request.args.get('text')
    b = TextBlob(text)
    return b.correct()