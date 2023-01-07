"use strict"

var search, resultado;
search = document.getElementById('search');
resultado = document.getElementById('resultado');

search.addEventListener('input', mostrarBusqueda);

function mostrarBusqueda(){
    resultado.innerHTML = '';
    const valor = search.value.toLowerCase();
    const datosFiltrados = DATOS.filter(dato=> dato.nombre.toLowerCase().indexOf(valor) > -1);
    const fragmento = document.createDocumentFragment();
    for(const dato of datosFiltrados){
        fragmento.appendChild(vista(dato));
    }
    resultado.appendChild(fragmento);
}

function vista(text){
    const span = document.createElement('span');
    span.innerHTML = `<b>id:</b> ${text.id}<br>
    <b>nombre:</b> ${text.nombre}<br>
    <b>compañia:</b> ${text.compania}<br>
    <b>fecha de nacimiento:</b> ${text.fdn}<br>
    <b>dirección:</b> ${text.direccion}<br>
    <b>acerca:</b> ${text.acerca}`;

    return span;
}