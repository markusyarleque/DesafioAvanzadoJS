(function(nombreGlobal, root, factoria){
    root[nombreGlobal] = factoria();
}('$$', this, function(){
    return {
        saludar: ()=> 'Hola Mundo',
        sumar: (a, b)=> a + b,
    }
}))

console.log($$.saludar());
console.log($$.sumar(1,2));