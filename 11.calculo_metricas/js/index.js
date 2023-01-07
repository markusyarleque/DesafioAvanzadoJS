"use strict"

var tablaMes, tablaLocalidad, localidad, mes, getMes, evalua;
tablaMes = document.getElementById('table-month');
tablaLocalidad = document.getElementById('table-locale');

fetch('metricas.json')
.then(r => r.json())
.then(data => {
    localidad = {};
    mes = {};
    for (const key in data) {
        evalua = data[key];

        if(!localidad[evalua.estado]){
            localidad[evalua.estado] = { c: 0, total: 0 };
        }
        localidad[evalua.estado].c += parseInt(evalua.evaluacion);
        localidad[evalua.estado].total += 1;

        getMes = evalua.fecha.split('-').filter((v, i) => i != 2).join('-');
        if(!mes[getMes]){
            mes[getMes] = { c: 0, total: 0 };
        }
        mes[getMes].c += parseInt(evalua.evaluacion);
        mes[getMes].total += 1;
    }
    for (const iterator of Object.keys(localidad)) {
        tablaLocalidad.appendChild(crearFila(iterator, Math.floor(localidad[iterator].c / localidad[iterator].total)));
    }
    for (const iterator of Object.keys(mes)) {
        tablaMes.appendChild(crearFila(iterator, Math.floor(mes[iterator].c / mes[iterator].total)));
    }
});

function crearFila(text, evaluacion){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = text;
    const td2 = document.createElement('td');
    td2.innerText = evaluacion;
    tr.appendChild(td1);
    tr.appendChild(td2);
    return tr;
}