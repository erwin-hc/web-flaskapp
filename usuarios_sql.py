import sqlite3
import json

connection = sqlite3.connect("usuarios.db")
cursor = connection.cursor()

#insert tabela users
cursor.execute(""" CREATE TABLE IF NOT EXISTS users(email TEXT, senha TEXT) """) 

#classe criar usuario
class Usuarios:
	def __init__(self, email, senha):
		self.email = email
		self.senha = senha	
		# inserir_usuario 
		cursor.execute("INSERT INTO users VALUES (?,?)", (self.email,self.senha))
		connection.commit()

#cadastrar usuarios

# erwin = Usuarios("erwin.stein@gmail.com","teste")
# contato = Usuarios("contato@facilpersianas.com.br","contato")
# daniel = Usuarios("comercial@santlux.com.br","comercial")
# larissa = Usuarios("larissa@facilpersianas.com.br","comercial")


#mostrar usuarios
cursor.execute('''SELECT * FROM users''')
rows = cursor.fetchall()
print('--------------------------------')
for row in rows:
	print(row)

#verificar se usuario existe
email = 'contato@facilpersianas.com.br'
senha = 'contato'
pesquisa_usuario = cursor.execute(f"SELECT email,senha FROM users WHERE email='{email}' AND senha='{senha}'") 
resultado_pesquisa_usuario = cursor.fetchall()
	
if len(resultado_pesquisa_usuario) == 0:
	print("SEM CADASTRO")
else:
	print(f'CADASTRADO {resultado_pesquisa_usuario}')
