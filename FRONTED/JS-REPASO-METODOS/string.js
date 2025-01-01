// Método .charAt(pos)
const name = "Manz";
name.charAt();      // 'M'
name.charAt(0);     // 'M'
name.charAt(1);     // 'a'
name.charAt(10);    // ''  (posición fuera de rango)

// Utilizando operador []
name[0];            // 'M'
name[1];            // 'a'
name[10];           // undefined  (posición fuera de rango)

// Método .indexOf(text, from)
const phrase = "LenguajeJS, página de Javascript";
phrase.indexOf("n");          // 2
phrase.indexOf("n", 3);       // 16
phrase.indexOf("n", 17);      // -1  (no encuentra más coincidencias)

// Método .lastIndexOf(text, from)
phrase.lastIndexOf("n");      // 16
phrase.lastIndexOf("n", 3);   // 2
phrase.lastIndexOf("n", 1);   // -1  (no encuentra coincidencias desde el índice indicado)
