nombre = "nombre"

count = 0
#while count < len(nombre):
 #   if nombre[count] == "b":
  #      break
   # print(nombre[count])
    #count += 1
    
while count < len(nombre):
    if nombre[count] == "b":
        count += 1  # Aumenta 'count' antes de continuar
        continue
        
    print(nombre[count])
    count += 1
