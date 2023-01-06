"use strict";

function contador(c){
    return () => c++;
}

var contadorIncremental = contador(1);

console.log(contadorIncremental());
console.log(contadorIncremental());
console.log(contadorIncremental());
console.log(contadorIncremental());
console.log(contadorIncremental());
console.log(contadorIncremental());