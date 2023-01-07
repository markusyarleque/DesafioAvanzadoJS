"use strict";
var contenedor = document.getElementById('main-content');
const datos = [];
for (const img of imagenes) {
    datos.push(fetch(img.src));
}

Promise.all(datos).then(r => {
    Promise.all(r.map(images => images.blob()))
    .then(blobs => {
        const fragmento = document.createDocumentFragment();
        for (const key of blobs) {
            const imgURL = URL.createObjectURL(key);
            const imgHTML = document.createElement('img');
            imgHTML.src = imgURL;
            fragmento.appendChild(imgHTML);
        }
        return fragmento;
    }).then(f => contenedor.appendChild(f));
})