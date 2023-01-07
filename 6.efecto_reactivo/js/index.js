"use strict"

const suma = document.getElementById('+');
const resta = document.getElementById('-');
const multi = document.getElementById('*');
const div = document.getElementById('/');
const igual = document.getElementById('=');
const number1 = document.getElementById('num1');
const number2 = document.getElementById('num2');
const rpta = document.getElementById('resultado');

var operador, valor = [];

suma.addEventListener('click', ejecutar);
resta.addEventListener('click', ejecutar);
multi.addEventListener('click', ejecutar);
div.addEventListener('click', ejecutar);
igual.addEventListener('click', ejecutar);

const operacion = {valor1: null, valor2: null, operador: null};


const handler = {
    get: (target, key)=>{
        if(key === 'valor1'){
            return number1.value === '' ? 0 : parseInt(number1.value);
        }
        if(key === 'valor2'){
            return number2.value === '' ? 0 : parseInt(number2.value);
        }
        return target[key];
    }
}

const proxy = new Proxy(operacion, handler);

function calcular() {
    let total;
    switch (proxy.operador) {
        case '+':
            total = proxy.valor1 + proxy.valor2;
            break;
        case '*':
            total = proxy.valor1 * proxy.valor2;
            break;
        case '-':
            total = proxy.valor1 - proxy.valor2;
            break;
        case '/':
            total = proxy.valor1 / proxy.valor2;
            break;
    }
    rpta.innerText = total;
}

function ejecutar(evento) {
    proxy.operador = evento.target.innerText;
    calcular();
}