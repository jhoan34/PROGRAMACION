//funciones por declaracion

function saludar() {
    return "Hola";
}
  
saludar();      // 'Hola'
typeof saludar; // 'function'
  

//funciones por expresion

const saludar2 = function() {
    return "Hola";
}
  
saludar2();      // 'Hola'

//funciones por expresion arrow function
const saludar3 = () => {
    return "Hola";
}
  
saludar3();      // 'Hola'


//funciones como objetos
const saludar = new Function("return 'Hola';");

saludar(); // 'Hola'


// funciones autoejecutables
(function () {
    console.log("Hola!!");
})();

(() => {

})()


// clausuras

const incr = (function () {
    let num = 0;
    return function () {
      num++;
      return num;
    };
})();


//callbacks

function sumar(a, b) {
    return a + b;
}
  
function restar(a, b) {
    return a - b;
}

//funciones de orden superior
function calcular(a, b, operacion) {
    return operacion(a, b);
}
  
calcular(4, 2, sumar); // 6
calcular(4, 2, restar); // 2