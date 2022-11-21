"use strict";
let x = 10;
x = 20;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Matheus";
let age = 20;
const isAdmin = true;
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
const user = {
    name: "Pedro",
    age: 18
};
console.log(user.name);
console.log(user.age);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
id = "200";
const userId = 10;
const productId = "10";
const shirId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G
};
console.log(camisa);
let teste;
teste = "auntenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Matheus"));
function logger(msg) {
    console.log(msg);
}
logger("Teste");
function greetting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    console.log(`Olá ${name}`);
}
greetting("José");
greetting("José", "Sir.");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplayNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplayNumbers(someNumbers));
function doSomething(info) {
    if (typeof info == "number") {
        console.log(`O número é ${info}`);
    }
}
