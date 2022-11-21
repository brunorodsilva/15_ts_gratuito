// string, boolean, number,...
let x: number = 10;
x = 20;
console.log(x);

// inferencia x annotation
// inferencia
let y = 12;
// annotation
let z: number = 12;

// tipos básicos
let firstName: string = "Matheus"
let age: number = 20
const isAdmin: boolean = true

// String != string
console.log(typeof firstName);

firstName = "João"

console.log(firstName);

// Object
const myNumbers: number[] = [1, 2, 3]
console.log(myNumbers);
console.log(myNumbers.length);
//error
// console.log(myNumbers.toUpperCase());

console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);

// tuplas -> tuple
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]
//error
// myTuple = [true, false, true]

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Pedro",
    age: 18
}
console.log(user.name);
console.log(user.age);

// any - vai aceitar qualquer coisa
let a:any = 0
a = "teste"
a = true
a = []

// union type
let id: string | number = "10"
id = 200
id = "200"
//error
// id = true
// id = []

// type alias
type myIDType = number | string
const userId: myIDType = 10
const productId: myIDType = "10"
const shirId: myIDType = 123

// enum
// tamanho de roupas (size: "Médio", size: "Grande", size: "Pequeno")

enum Size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande"
}

const camisa = {
  name: "Camisa gola V",
  size: Size.G
}

console.log(camisa);

// literal types
let teste: "auntenticado" | null
//error
// teste = "outroValor"
teste = "auntenticado"
teste = null

// funcoes
function sum(a:number, b:number) {
  return a + b
}

console.log(sum(12, 12));
//error
// console.log(sum("12", true));

function sayHelloTo(name: string): string {
  //interpolação
  return `Hello ${name}`
}

console.log(sayHelloTo("Matheus"));

function logger(msg: string): void{
  console.log(msg);
}

logger("Teste");

function greetting(name: string, greet?: string): void{
  if(greet) {
    console.log(`Olá ${greet} ${name}`);
  }
    console.log(`Olá ${name}`);
  }

  greetting("José");
  greetting("José", "Sir.");

  // interfaces
  interface MatchFunctionParams {
    n1: number,
    n2: number
  }

  function sumNumbers(nums: MatchFunctionParams){
    return nums.n1 + nums.n2
  }

  console.log(sumNumbers({n1:1, n2:2}));

  function multiplayNumbers(nums: MatchFunctionParams){
    return nums.n1 * nums.n2
  }

  const someNumbers:MatchFunctionParams ={
    n1: 5,
    n2: 10
  }

  console.log(multiplayNumbers(someNumbers));

  // narrowing
  // checagem tipos
  function doSomething(info: number | boolean){
    if(typeof info == "number"){
      console.log(`O número é ${info}`);
    }
  }
