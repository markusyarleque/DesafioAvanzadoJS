"use strict";

function compararObjetos(obj1, obj2){
    if(obj1.length !== obj2.length){
        return "Los objetos no son iguales";
    }
    if(typeof obj1 === 'object' && typeof obj2 === 'object'){
        for (const key in obj1) {
            if(!compararObjetos(obj1[key], obj2[key])){
                return "Los objetos no son iguales";
            }
        }
        return "Los objetos son iguales";
    }
    if(Array.isArray(obj1) && Array.isArray(obj2)){
        for (let i = 0; i < obj1.length; i++) {
            if(!compararObjetos(obj1[i], obj2[i])){
                return "Los objetos no son iguales";
            }
        }
        return "Los objetos son iguales";
    }
    if(obj1 === obj2){
        return "Los objetos son iguales";
    };
}

console.log(compararObjetos([1,2,3],[1,3,2])); //FALSE
console.log(compararObjetos([1,2,3],[1,2,3])); //TRUE
console.log(compararObjetos([1,2,3],[1,2,3,4])); //FALSE
console.log(compararObjetos({a: 1, b: 2}, {a: 1, b: 2})); //TRUE
console.log(compararObjetos({a: 1, b: 2}, {a: 1, b: 2, c: 3})); //FALSE
console.log(compararObjetos([{a: 1, b: 2}], [{a: 1, b: 2}])); //TRUE
console.log(compararObjetos(2, 2)); //TRUE
console.log(compararObjetos([{ a: [100, 200], b: 2 }], [{ a: [100, 200], b: 2 }])); //TRUE
console.log(compararObjetos([{ a: [100, 200], b: { x: 'ABC' } }], [{ a: [100, 200], b: { x: 'ABC' } }])); //TRUE