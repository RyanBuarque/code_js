console.log("Olá Mundo");
console.log("---------------");

// console.log("Olá Mundo11");

// anotação
 
/* anotação
    tipo 2*/

console.log("Blocos -->");
console.log("---------------");

 {
    console.log("Multiverso Par:");
    console.log("Olá Mundo2");
    console.log("Olá Mundo4");
    console.log("Olá Mundo6");
    console.log("Olá Mundo8");
};

{
    console.log("---------------");
    console.log("Multiverso Impar:");
    console.log("Olá Mundo1");
    console.log("Olá Mundo3");
    console.log("Olá Mundo5");
    console.log("Olá Mundo7");
    console.log("Olá Mundo9");
};

console.log("---------------");
console.log("Variaveis -->");
console.log("---------------");

console.log(10); //antes

var quantidade = 10;
console.log(quantidade);

console.log(quantidade, 10);

console.log(quantidade * (10 - 0.5));

let valor = (quantidade * (10 - 0.5));
console.log(valor); 

const ante = valor;

console.log("---------------");
console.log("Dados -->");
console.log("---------------");

console.log(typeof quantidade); //number

console.log(typeof "true"); //string

let boo = true;
console.log(typeof boo); //boolean

console.log("---------------");
console.log("Desafio -->");
console.log("---------------");

let raio = 10;

const pi = Math.PI;

let result = pi * Math.pow(raio, 2);
console.log(result.toFixed(2));

console.log("---------------");

let a = 7;
let b = 94;
console.log(a, b);

let c = a;
    a = b;
    b = c;
console.log(a, b);

//ou

[a, b] = [b, a];
console.log(a, b);

console.log("---------------");
console.log("String -->");
console.log("---------------");

const escola = "cod3r";
console.log(escola.charAt(4));
//chama a letra baseado em sua posição
//começa de zero

console.log(escola.charCodeAt(3)); //codigo
console.log(escola.indexOf("x")); /*procura e retorna posição o primeiro indice
que corresponde aquela letra, obs: caso não exista letra na string retorna -1*/

console.log(escola.replace(/\d/, "e")); //d = digitos
console.log(escola.replace(/\w/g, "e")); //g = global

console.log("---------------");
console.log("Template -->");
console.log("---------------");

const nome = "Rebeca";
const template = `
    Olá
    ${nome}!`

console.log(template);