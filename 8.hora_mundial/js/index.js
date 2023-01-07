"use strict"

var horaActual, span, zonas, offset, resultado, option = '';
span = document.getElementById('span');
zonas = document.getElementById('zonas');
resultado = document.getElementById('resultado');
const ms_hora = 1000 * 60 * 60;

//* HORA ACTUAL
setInterval(() => {
    horaActual = new Date();
    span.innerHTML = (horaActual.getDay() + 1) + '/' + (horaActual.getMonth() + 1) + '/' + horaActual.getFullYear() + ', ' + horaActual.getHours() + ':' + horaActual.getMinutes() + ':' + horaActual.getSeconds();
}, 1000);

//& Mostrar Zonas horarias disponibles
function mostrarZonas(){
    for (const zona of zonasHorarias) {
        option = option + `<option value="${zona.offset}"> ${zona.texto} </option>`;
        zonas.innerHTML = option;
    }
}
mostrarZonas();

//! Función de conversión
zonas.addEventListener('change', calcularZonaHoraria);

function calcularZonaHoraria(evento){
    setInterval(() => {
        offset = evento.target.value;
        const hoy = new Date();
        var utc = hoy.getTime();
        utc += (5* ms_hora)
        const zonaTiempo = new Date(utc + (offset * ms_hora));
        return resultado.innerHTML = 'HORA MUNDIAL: ' + zonaTiempo.toLocaleString();
    }, 1000);
}