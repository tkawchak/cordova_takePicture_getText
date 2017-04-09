from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/')
def data():
	# here we want to get the value of user (i.e. ?user=some-value)
	text = request.args.get('text')
	print text

	return text


if __name__ == '__main__':
	app.run(debug=False, host='0.0.0.0')
