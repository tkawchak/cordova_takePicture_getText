from flask import Flask
from flask import request
from textblob import TextBlob
import wolframalpha
import os

app = Flask(__name__)

@app.route('/')
def data():
	# here we want to get the value of user (i.e. ?user=some-value)
	text = request.args.get('text')
	print text
	corrected_text = str(autocor(text))
	wolfram = callwolf(corrected_text)

	return corrected_text + 'result: ' + wolfram

def callwolf(text):
    var_array = []
    app_id = "2UVHV8-E7J4WKLGWG"
    client = wolframalpha.Client(app_id)
    res = client.query(text)
    answer = next(res.results).text
    return answer

def autocor(text):
    b = TextBlob(text)
    return str(b.correct())

if __name__ == '__main__':
	app.run(debug=False, host='0.0.0.0')
