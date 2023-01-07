"use strict"

var texto, resultado, morse, alpha, idTimer;
texto = document.getElementById('texto');
resultado = document.getElementById('resultado');

alpha =' ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
morse = '\n,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----'.split(',');

texto.addEventListener('input', () => {
    throttle(convertir, 500)
});

function convertir(){
    var txt = texto.value.toUpperCase();
    if(txt.slice(0,1) == '.' || txt.slice(0,1) == '-'){
        txt = txt.split(' ');
        for (let i = 0; i < txt.length; i++) {
            txt[i] = alpha[morse.indexOf(txt[i])];
        }
        txt = txt.join('');
        resultado.innerHTML = 'TEXTO: ' + txt;
    }else{
        txt = txt.split('');
        for (let i = 0; i < txt.length; i++) {
            txt[i] = morse[alpha.indexOf(txt[i])];
        }
        txt = txt.join(' ');
        resultado.innerHTML = 'MORSE: ' + txt;
    }
}

function throttle(func, tiempo) {
    if (idTimer) {
        return;
    }
    idTimer = setTimeout(() => {
        func();
        idTimer = undefined;
    }, tiempo);
}