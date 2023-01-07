"use strict";
var img, rutaImagen, mostrarImagen, btnImagen, validarImagen;
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
    validarImagen = rutaImagen.value.slice(-3);
    console.log(validarImagen != 'gif');
    if(validarImagen != 'jpg' && validarImagen != 'gif' && validarImagen != 'png'){
        alert('Solo se admiten archivos de imagen: jpg - png - gif');
        return;
    }
    const imagen = new Imagen(rutaImagen.value);
    imagen.cargarImagen();
});
