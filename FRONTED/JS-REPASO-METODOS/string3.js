// Texto inicial
const text = "  los gatos dominarán el mundo.  ";
const stringNumber = "15";
const name = "Manz";

// 1. Transformaciones a minúsculas y mayúsculas
console.log(text.toLowerCase());   // "  los gatos dominarán el mundo.  "
console.log(text.toUpperCase());   // "  LOS GATOS DOMINARÁN EL MUNDO.  "

// 2. Capitalizar texto
const toCapitalize = (text) => text[0].toUpperCase() + text.substring(1);
const toCapitalizeEveryWord = (text) => {
  return text.trim().split(" ")
    .map(word => toCapitalize(word))
    .join(" ");
};
console.log(toCapitalize(text.trim()));            // "Los gatos dominarán el mundo."
console.log(toCapitalizeEveryWord(text));          // "Los Gatos Dominarán El Mundo."

// 3. Relleno de cadenas
console.log(stringNumber.padStart(5, "0"));   // "00015"
console.log(stringNumber.padEnd(5, "*"));     // "15***"

// 4. Eliminar espacios sobrantes
console.log(text.trim());        // "los gatos dominarán el mundo."
console.log(text.trimStart());   // "los gatos dominarán el mundo.  "
console.log(text.trimEnd());     // "  los gatos dominarán el mundo."

// 5. Concatenar strings
console.log(name.concat("i", "to"));   // "Manzito"
console.log(name.concat(4, 5));        // "Manz45"
console.log(name + "i" + "to");        // "Manzito"
console.log(name + (4 + 5));           // "Manz9"
