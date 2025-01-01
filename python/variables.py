edad = 10
nombre = "Cristian"
apellido = "Gonzalez"

if (nombre == "Cristian"):
    print("Hola " + nombre + " " + apellido)
else:
    print("Hola " + nombre) 
    
def suma(num1, num2):
    return num1 + num2

hola = suma(10, 20)

#print(hola)


#tipos de datos 
numero = int(10)
float1 = float(10.5)
typo = type(numero)
stree = str(68)
ccc = str(True)


#para poder concatenar strings y ints o float es necesario usar la funcion str(y el dato como int o float)
#print(ccc)

#asignaciones multiples

nombre, edad, atractivo = "jhoan", 21 , True

nombre1 = nombre2 = nombre3 = nombre4 = 55555555555555
#print(nombre, edad , atractivo)


#metodos a las cadenas de texto
nombre = "jhoan"
print(len(nombre))
print(nombre.find("j")) #da el indice de la pocision del caracter
print(nombre.capitalize())# solo coloca la primera letter en mayus
print(nombre.upper()) #hace a toda la cadena mayusculas
print(nombre.lower()) #hace a toda la cadena minusculas
print(nombre.isdigit()) #si es un numero
print(nombre.isalpha()) #si es una cadena de texto, da false si tiene espacios o caracteres especiales
print(nombre.count("o")) #cuenta cuantas veces se repite un caracter
print(nombre.replace("o", "a")) #reemplaza un caracter por otro
print(nombre*3) #repite la cadena de texto 3 veces
print(nombre[::-1]) #invierte la cadena de texto
print(nombre[0:3]) #imprime los caracteres de la pocision 0 a la 3
print(nombre[0:3:2]) #imprime los caracteres de la pocision 0 a la 3 de 2 en 2