"use strict";
var img, rutaImagen, mostrarImagen, btnImagen;
rutaImagen = document.getElementById('ruta');
btnImagen = document.getElementById('btnMostrarImagen');
mostrarImagen = document.getElementById('MostrarImagen');

class Imagen{
    ruta;
    constructor(ruta){
        this.ruta = ruta
    }
    cargarImagen(){
        img = document.createElement('img');
        img.src = this.ruta;
        img.style.width = '300px';
        mostrarImagen.appendChild(img);
    }
}

btnImagen.addEventListener('click', ()=>{
    if(!rutaImagen.value) return;
    const imagen = new Imagen(rutaImagen.value);
    imagen.cargarImagen();
});
