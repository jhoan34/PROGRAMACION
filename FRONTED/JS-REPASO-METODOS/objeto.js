// ❌ Esto no realiza una clonación, es una referencia al original
const copy = data;

// ❌ Sólo superficial (Hay que crear objeto con el mismo tipo)
const copy1 = {};
Object.assign(copy, data);

// ❌ Sólo superficial
const copy2 = { ...data };

// Definimos un objeto de ejemplo
const user = {
    name: "Manz",
    life: 99,
    power: 10,
    talk: function() {
      return "Hola!";
    }
  };
  
  // 1. Iteradores de objetos
  console.log(Object.keys(user));        // ["name", "life", "power", "talk"]
  console.log(Object.values(user));      // ["Manz", 99, 10, ƒ]
  console.log(Object.entries(user));     // [["name", "Manz"], ["life", 99], ["power", 10], ["talk", ƒ]]
  
  // Ejemplo con array
  const animals = ["Gato", "Perro", "Burro", "Gallo", "Ratón"];
  console.log(Object.keys(animals));     // [0, 1, 2, 3, 4]
  console.log(Object.values(animals));   // ["Gato", "Perro", "Burro", "Gallo", "Ratón"]
  console.log(Object.entries(animals));  // [[0, "Gato"], [1, "Perro"], [2, "Burro"], [3, "Gallo"], [4, "Ratón"]]
  
  // Ejemplos con estructuras no iterables
  console.log(Object.keys(new Date()));  // []
  console.log(Object.values(/.+/));      // []
  console.log(Object.entries(true));     // []
  
  // 2. Convertir un array a objeto usando Object.fromEntries()
  const keys = ["name", "life", "power", "talk"];
  const values = ["Manz", 99, 10, function() { return "Hola"; }];
  
  // Generación del array de pares [key, value] usando un bucle
  const entries = [];
  for (let i of Object.keys(keys)) {
    const key = keys[i];
    const value = values[i];
    entries.push([key, value]);
  }
  const userFromEntries1 = Object.fromEntries(entries);
  console.log(userFromEntries1);   // {name: 'Manz', life: 99, power: 10, talk: ƒ}
  
  // Alternativa compacta usando .map() para generar el array de pares [key, value]
  const entriesCompact = values.map((value, index) => [keys[index], value]);
  const userFromEntries2 = Object.fromEntries(entriesCompact);
  console.log(userFromEntries2);   // {name: 'Manz', life: 99, power: 10, talk: ƒ}
  