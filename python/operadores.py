temperatura = int(input("ingrese la temperatura: "))

if(temperatura >= 0 and temperatura <= 30):
    print("la temperatura es buena")
else: 
    print("la temperatura es mala")
    
if(temperatura < 0 or temperatura > 30):
    print("la temperatura es mala")
else : 
    print("la temperatura es buena")
    

if not(temperatura < 0 or temperatura > 30):
    print("la temperatura es buena")
else:
    print("la temperatura es mala")