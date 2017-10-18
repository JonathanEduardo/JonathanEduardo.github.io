var registro = document.getElementById('registro');//test.algo regresa un boolean
var mensaje = document.getElementById('mensaje');
var retro = document.getElementById('retro');

registro.addEventListener('blur', function () {
      verificaNombre();    
});

registro.addEventListener('keyup', function () {
    var letras = (/a-z/i).test(registro.contra.value); //regresa un boolean
    var digitos = (/[0-9]/i).test(registro.contra.value); 
    var simbolos = (/[!"·$%&/()]/).test(registro.contra.value);

    if(letras && digitos && simbolos){
        retro.innerHTML ='segura';
       // retro.className = 'nivel-mediano';
    }
    else if (letras && digitos) {
        retro.innerHTML ='mediana'; 
      //  retro.className = 'nivel-seguro';
    } else if (letras) {
        retro.innerHTML ='baja';
      //  retro.className = 'nivel-bajo';
    }
});

registro.addEventListener('submit',function(evento) {

    var  nom= verificaNombre();
    var contra = verificaContraseña();
    var terminos = verificaTerminos();

    if (!nom || !contra || !terminos) {
        alert('error')
       evento.preventDefault();
    }
    
});
  

function verificaNombre() {

    var exReg = /[a-z]/i; //un conjunto de caracteres de la a a la z y la i es pa5ra que ignore mayusculas
    if(exReg.test(registro.nombre.value.charAt(0)))
    {
        return true;
    }
    else{
        mensaje.innerHTML += 'debe empezar con una letra';
       return false;
    }
}

function verificaContraseña() {
   
    return true;
}


function verificaTerminos() {
    return true;
}