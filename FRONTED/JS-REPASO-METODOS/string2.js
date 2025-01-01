

// 📍 Comprobación en textos
const text = "Manz";

// Método .startsWith(text, from)
text.startsWith("M");     // true  ('Manz' empieza por 'M')
text.startsWith("a", 1);  // true  ('anz' empieza por 'a')

// Método .endsWith(text, to)
text.endsWith("o");       // false ('Manz' no acaba en 'o')
text.endsWith("n", 3);    // true  ('Man' acaba en 'n')

// Método .includes(text, from)
text.includes("an");      // true  ('Manz' incluye 'an')
text.includes("M", 1);    // false ('anz' no incluye 'M')

// 🔍 Búsqueda de cadenas de textos
const phrase = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

// Método .search(regexp)
phrase.search(regexp);    // 3, porque la primera coincidencia ocurre en la posición 3 ("gato")

// Método .match(regexp)
phrase.match(regexp);     // ["gato", "pato"], las coincidencias encontradas

// Método .matchAll(regexp) con iterador
const iterator = phrase.matchAll(regexp);
for (let occurrence of iterator) {
  console.log(occurrence);
  // ['gato', index: 3, input: 'El gato, el perro y el pato.', groups: undefined]
  // ['pato', index: 23, input: 'El gato, el perro y el pato.', groups: undefined]
}

// Alternativa de .matchAll() desestructurada en array
const results = [...phrase.matchAll(regexp)];
results[0].index;     // 3 (posición de "gato")
results[1].index;     // 23 (posición de "pato")

// 🔁 Reemplazo de cadenas de texto
const sentence = "Hola gato, ¿eres un perro o eres un pato?";

// Método .replace(text, newText) para la primera coincidencia
sentence.replace("g", "p");               // "Hola pato, ¿eres un perro o eres un pato?"
sentence.replace("g", "p").replace("o", "a"); // "Hala pato, ¿eres un perro o eres un pato?"

// Método .replaceAll(text, newText) para todas las coincidencias
sentence.replaceAll("e", "i");            // "Hola gato, ¿iris un pirro o iris un pato?"
sentence.replace(/e/g, "i");              // "Hola gato, ¿iris un pirro o iris un pato?"

// Reemplazo usando una expresión regular global para cambiar todas las vocales a "i"
const exampleText = "Javascript es un gran lenguaje";
exampleText.replace(/[aeou]/g, "i");      // "Jiviscript is in grin lingiiji"

// Reemplazo con función callback para cambiar el texto encontrado
const replaceAction = (value) => `=>${value}<=`;
sentence.replace(/.ato/g, replaceAction); // "Hola =>gato<=, ¿eres un perro o eres un =>pato<=?"
sentence.replaceAll("un", replaceAction); // "Hola gato, ¿eres =>un<= perro o eres =>un<= pato?"
