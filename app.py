from flask import Flask, render_template

app = Flask(__name__,template_folder='client', static_folder='client')


@app.route('/')
def index():
  return render_template('index.html')
  


@app.route('/dashboard')
def second():
  return render_template('dashboard.html')


if __name__ == '__main__':
  app.run(debug=True)
  
