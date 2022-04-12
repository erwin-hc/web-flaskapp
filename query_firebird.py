import conn_firebird as fbd

# -----------------------------------------------------------------------------------------------------
# QUERY PEDIDOS 
# -----------------------------------------------------------------------------------------------------
def get_pedidos(qtd_reg=1000):
	cur = fbd.conn.cursor()
	query_get_pedidos = (f''' \
		 SELECT FIRST {qtd_reg} \
		 SKLLEMP.SIGLA, \
		 SKLLPPC.DATA, \
		 SKLLPDS.ENTREGUE, \
		 SKLLPDS.TRANSEMPRESA, \
		 SKLLPDS.VOLNUMERO, \
		 SKLLPDS.OS, \
		 SKLLPPC.CON_NOME, \
		 SKLLPPC.CON_OBS, \
		 SKLLPPC.SETOR_PPM, \
		 SKLLPPC.REGISTRO, \
		 SKLLPPC.ENTDATA, \
		 SKLLPPC.DTENTREGA \
		 FROM SKLLEMP JOIN SKLLPPC ON (SKLLEMP.SIGLA = SKLLPPC.SIGLA)      \
		 JOIN SKLLPDS ON (SKLLPDS.PEDIDO = SKLLPPC.PEDIDO) \
		 WHERE (SKLLEMP.RAMO1 = 'FAC' \
		 AND SKLLPDS.ENTREGUE <> 'AJUSTE' \
		 AND SKLLPDS.OBS2 NOT LIKE '%PEDIDOS DO DIA :%' \
		 AND SKLLPPC.SETOR_PPM <> '' \
		 AND SKLLPDS.DTNOTA <= CURRENT_DATE \
		 AND SKLLPDS.DTNOTA >= CURRENT_DATE - 365) \
		 ORDER BY SKLLPPC.REGISTRO DESC") ''') 
	cur.execute(query_get_pedidos)
	output_pedidos = cur.fetchall()
	
# AND SKLLPDS.DTNOTA >= CURRENT_DATE - 360 \
	
	data = output_pedidos
	newData = [tuple(s if s != "ENTREGUE" else "COLETADO" for s in tup) for tup in data]
	data_formatada = [tuple(s if s != "N" else "PRODUCAO" for s in tup) for tup in newData]
	


	cur.close()
	return data_formatada

# -----------------------------------------------------------------------------------------------------
# QUERY ITENS DO PEDIDO 
# -----------------------------------------------------------------------------------------------------
def get_itens_pedido(registro=None):
	cur = fbd.conn.cursor()
	query_get_itens_pedido = (f''' \
		 SELECT  \
		 SKLLPPC.REGISTRO, \
		 SKLLPPC.DATA,
		 SKLLPPC.OS, \
		 SKLLPPC.CON_NOME, \
		 SKLLPPC.CON_OBS, \
		 SKLLPPC.SETOR_PPM, \
		 SKLLPPC.DATA, \
		 SKLLPPC.DTENTREGA, \
		 SKLLPPI.QUANT, \
		 SKLLPPI.NOME, \
		 SKLLPPI.OBS, \
		 SKLLPPI.LARG, \
		 SKLLPPI.ALT, \
		 SKLLPPI.M2, \
		 SKLLPPI.COMANDO, \
		 SKLLPPI.MODELO, \
		 SKLLPPI.COMPR, \
		 SKLLPPI.LATD, \
		 SKLLPPI.LATE, \
		 SKLLPPI.TP, \
		 SKLLPDS.NNOTA,
		 SKLLPDS.ENTREGUE
		 FROM SKLLPPI JOIN SKLLPPC ON (SKLLPPC.REGISTRO = SKLLPPI.REGISTRO) \
		 JOIN SKLLPDS ON (SKLLPDS.PEDIDO = SKLLPPC.PEDIDO)      \
		 WHERE (SKLLPPI.REGISTRO = {registro} )\
		 ORDER BY SKLLPPI.NOME")''') 
	cur.execute(query_get_itens_pedido)
	output_itens_pedido = cur.fetchall()

	data = output_itens_pedido
	newData = [tuple(s if s != "ENTREGUE" else "COLETADO" for s in tup) for tup in data]
	data_formatada = [tuple(s if s != "N" else "PRODUCAO" for s in tup) for tup in newData]

	cur.close()
	
	return data_formatada

# get_itens_pedido(48400)
# print(get_pedidos(10))