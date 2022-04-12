import firebirdsql as fb
import json

conn = fb.connect(
    host='santlux.ddns.net',
    database='C:\SERKELLB\EMPRESAS\SANTLUX.FDB',
    port=3050,
    user='sysdba',
    password='masterkey',
    charset='latin1',
)