const text = "JavaScript";
typeof text; // "string"

const text2 = 23;
typeof text2; // "number"

const text3 = true;
typeof text3; // "boolean"


//la propiedad constructor name 

const text4 = "JavaScript";
text4.constructor.name; // "String"

const text5 = 23;
text5.constructor.name; // "Number"

// instancia "instaceof"

const numbers = [1, 2, 3];
getPrototypeChain(numbers);   // ['Array', 'Object', null]

numbers instanceof Array      // true
numbers instanceof Object     // true
numbers instanceof Number     // false
numbers instanceof String     // false
