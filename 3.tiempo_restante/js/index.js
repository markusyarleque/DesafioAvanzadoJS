"use strict";

var fechaInicial, btnCalcular, mostrarTiempo, fechaFinal, tiempo, anios, meses, dias, horas, minutos, segundos, resto;
fechaInicial = document.getElementById('fecha');
btnCalcular = document.getElementById('btnCalcular');
mostrarTiempo = document.getElementById('timer');

btnCalcular.addEventListener('click', tiempoRestante);

function tiempoRestante(){
    if(!fechaInicial.value){
        return;
    }

    fechaFinal = new Date(fechaInicial.value);

    if((fechaFinal.getTime() - Date.now()) <= 0){
        alert("Seleccione una fecha futura!");
        return 
    }

    setInterval(()=>{
        tiempo = Math.abs(fechaFinal.getTime() - Date.now());

        anios = Math.floor(tiempo / (1000*60*60*24*365));
        resto = tiempo % (1000*60*60*24*365);
        
        meses = Math.floor(resto / (1000*60*60*24*30));
        resto = tiempo % (1000*60*60*24*30);

        dias = Math.floor(resto / (1000*60*60*24));
        resto = tiempo % (1000*60*60*24);
        
        horas = Math.floor(resto / (1000*60*60));
        resto = tiempo % (1000*60*60);
        
        minutos = Math.floor(resto / (1000*60));
        resto = tiempo % (1000*60);

        segundos = Math.floor(resto / 1000);
        
        mostrarTiempo.innerHTML = "Faltan: " + (anios ? (anios + 'años, ') : '') + (meses ? (meses + 'meses, ') : '') + (dias ? (dias + 'días, ') : '') + (horas ? (horas + 'horas, ') : '') + (minutos ? (minutos + 'minutos y ') : '') + (segundos ? (segundos + 'segundos.') : '');
    }, 1000);
}