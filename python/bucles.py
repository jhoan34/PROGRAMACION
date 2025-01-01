import time
nombre = ""

while len(nombre) == 0:
    nombre = input("Ingrese su nombre: ")
 
   
while nombre == "" :
    nombre = input("Ingrese su nombre: ")
    
    
for ele in range(0, 10, 2): # el tercer parametro es para colocar de cuanto en cuanto va a contar
    print(ele)
    
    
nombre1 = "cristian"


for ele in nombre1:
    print(ele)
  
    
for s in range(10, 0 , -1 ): #para contar de atras para adelante se coloca -1 en el tercer parametro 
    print(s)
    time.sleep(1) #el parametro es en segundos 