import query_firebird as qfb
from flask import Flask, render_template, request 
import sqlite3
import datetime
import dateutil.parser


app = Flask(__name__)


@app.route("/", methods=['GET','POST'])
def index():	
	if request.method=='POST':	
		
		connection = sqlite3.connect("usuarios.db")
		cursor = connection.cursor()

		email = request.form['email']
		senha = request.form['senha']
		# print(email,senha)

		cursor.execute(f"SELECT email,senha FROM users WHERE email='{email}' AND senha='{senha}'") 
		results = cursor.fetchall()
	
		if len(results) == 0:			
		    msg = "Não autorizado, ou não cadastrado!!!"
		    return render_template("index.html",  msg=msg)
		else:					
			return render_template('pedidos.html', data=qfb.get_pedidos())
			cursor.close()

		
	return render_template('index.html')

@app.route("/pedidos",methods=['GET','POST'])
def pedidos():		
	return render_template('pedidos.html', data=qfb.get_pedidos())


@app.route("/pedidos/<num_pedido>",methods=['GET','POST'])
def itens_pedido(num_pedido=0):
		print(num_pedido)
		return render_template("pedidos.html", np=qfb.get_itens_pedido(num_pedido), data=qfb.get_pedidos())

# @app.route("/romaneios")
# def romaneios():	
# 	return render_template("romaneios.html")

# @app.route("/prontas")
# def prontas():	
# 	return render_template("prontas.html")


@app.template_filter('formatdatetime')
def format_datetime(value, format="%d/%m/%y"):
    """Format a date time to (Default): d Mon YYYY HH:MM P"""
    if value is None:
        return ""
    return value.strftime(format)


if __name__ == '__main__':
	app.run(host='10.0.0.53',debug=1)


	