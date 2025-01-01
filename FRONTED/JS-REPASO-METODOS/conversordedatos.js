const text = "222";
const number = Number(text);
console.log(number); // 222

// Boolean(0) String() 
/*
NaN == NaN;         // false (El valor no es el mismo)
NaN === NaN;        // false (Ni el valor, ni el tipo de dato es el mismo)

Number.isNaN(NaN);  // true (Forma correcta de comprobarlo)
Number.isNaN(5);    // false (5 es un número, no es un NaN)
Number.isNaN("A");  // false ("A" es un string, no es un NaN)
*/

Number.parseInt("42");      // 42
Number.parseInt("42€");     // 42 (descarta todo desde un carácter no numérico)
Number.parseInt("Núm. 42"); // NaN (empieza a descartar en Núm, descarta también 42)
Number.parseInt("A");       // NaN (No se puede representar como un número)
Number.parseInt("");        // NaN (No se puede representar como un número)


Number.parseFloat("42.5");      // 42.5 (Conserva decimales)
Number.parseFloat("42");        // 42 (El número es entero, convierte a entero)
Number.parseFloat("88.99€");    // 88.99 (Conserva decimales)
Number.parseFloat("42€");       // 42 (El número es entero, convierte a entero)
Number.parseFloat("Núm. 33.5"); // NaN (empieza a descartar en Núm, descarta todo)

Number.parseInt("11101", 2);    // 11101 en binario, es 29 en decimal
Number.parseInt("31", 8);       // 31 en octal, es 25 en decimal
Number.parseInt("FF", 16);      // FF en hexadecimal, es 255 en decimal


(16).toString();        // "16"     (lo convierte a string)
(42.5).toString();      // "42.5"   (lo convierte a string)
(26).toString(2);       // "11010"  (26 en decimal, es 11010 en binario)
(80).toString(8);       // "120"    (80 en decimal, es 120 en octal)
(245123).toString(16);  // "3bd83"  (245123 en decimal, es 3bd83 en hexadecimal)
