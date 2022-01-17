// for(let num1 = 3; num1<=5; num1++){
//     for(let num2 = 4; num2  <=5; num2++){
//         console.log(`${num1}:${num2}`);
//     }
// }

// console.log("Imprimir del 0-15 de tres en tres");
// for(let i = 0; i<=15; i+=3){
//     console.log(i);
// }

// console.log("Ejercicio 3");

// var contador = 0;
// while(contador++ <5){
//     for(let i = 0; i<2; i++){
//         console.log(`Contador While= ${contador}:Contador FOR:${i}`);
//     }

//Ejercicios GITHUB
// Exercise #1
// Part 1
// There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.

// Part 2
// Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like?

// Part 3
// It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?

var fila = ["Sofia","David","Juan"];
fila.push("Sara","Agustin");
fila.shift();
console.log(fila);
fila.unshift("Renata");
fila[0] = "David";
fila[1] = "Renata"
fila.push("Elena")
console.log(fila);

// Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop.

var signo = "*";
var resultado = "";
for(let i = 0; i<5; i++){
    resultado+=signo;
    console.log(resultado);
}

// Write while loops to do the following:

// – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
// as long as xValue remains positive.
// - Print all the odd numbers between 1 - 100.
// - Write a method with a while loop to print 1 through n in square brackets. 
// For example, if n = 6 print [1] [2] [3] [4] [5] [6]
// - Write a method with a while loop that computes the sum of first n positive integers: 
// sum = 1 + 2 + 3 + … + n
// Examples:
// n = 5 sum = 15
// n = 19 sum = 190

let valor = 5;
while(valor >0){
    console.log(valor);
    valor -= 0.5
}

let valor2 = 1;
while(valor2<100){
    console.log(valor2);
    valor2+=2;
}

function imprimir(parametro){
    var numero = 1;
    var arreglo = [];
    while(numero <=parametro){
        arreglo.push(numero);
        parametro;
        numero++;
    }
    return arreglo
}

console.log(imprimir(10));

function sumar(n){
    var numero = 0;
    var acumulador = 0;
    while(numero <=n){
        acumulador += numero;
        numero ++;
    }
    console.log(acumulador);
}

sumar(19);