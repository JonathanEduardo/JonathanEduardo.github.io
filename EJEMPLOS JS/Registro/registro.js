var registro = document.getElementById('registro');
var btnRegistrar = document.getElementById('btnRegistrar');


registro.addEventListener('submit',function(evento) {

    if (!verificaNombre() || !verificaContraseña() || !verificaTerminos()) {
        alert('error')
        var mensaje = getElementById();
    }
    
})
  

function verificaNombre() {

    if (registro.nombre.value.charAt(0).toLower >= 'a') {
        
    }
    return false;
    
}

function verificaContraseña() {
    return false;
}


function verificaTerminos() {
    return false;
}