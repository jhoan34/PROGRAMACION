nombre = "alex Smith"

primer_nombre = nombre[0:4].upper()
apellido = nombre[5:].capitalize()
nombre_dos = nombre[0::2] #esto es para imprimir los caracteres de dos en dos [0:10:2]
nombre_invertido = nombre[::-1] #esto es para imprimir el nombre al reves
website = "http://google.com"

slice = slice(7,-4) #esto es para imprimir el nombre de la pagina web sin el http:// y el .com

print(nombre_dos)