// console.log("Mi primer console.log")
// console.error("Esto es un error")
/*console.warn("Esto es una advertencia")

alert("Esto es un alert")*/

let variable = "Variable";
// console.log(typeof variable);
//  let variable ="ey"
variable = "Hola, soy una variable";
const nombre = "Pepe";
let dato;

dato = 10;
// console.log("Hola soy " + nombre + "y tengo " + dato + " años");
// console.log(`Hola soy ${nombre} y tengo ${dato} años`);
// console.log(typeof dato);

const s = "Hello World";
let val;
val = s.length;

val = s.toUpperCase();
val = s.toLowerCase();

val = s.substring(0, 5);

val = s.split("");

// console.log(val)

const numbers = [1, 2, 3, 7, 5];
const fruits = ["apples", "oranges", "pears", "grapes"];

// const numbersAndFruits =[numbers,fruits]
// const fruitAndNumber =[numbersAndFruits[1][1],numbersAndFruits[0][2]]
// console.log(fruitAndNumber)

fruits[4] = "blueberries";

fruits.push("strawberries");

fruits.unshift("mangos");

fruits.pop();

//   console.log(fruits);

const person = {
  name: "Edu",
  age: 30,
  hobbies: ["music", "movies", ["futbol",
  {
    name:"tenis",
    team:["individual","por parejas"]
  }
  , "baloncesto"]],
  address: {
    street: "50 Main st",
    city: "Boston",
    state: "MA",
  },
};

person.age =10
console.log(person)
