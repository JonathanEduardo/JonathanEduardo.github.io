
var btnAgregar = document.getElementById("btnAgregar");

/* event listener*/

btnAgregar.addEventListener('click', function(){
    var entrada = document.getElementById('entrada');
    var contenido = entrada.value;
    agregaCaja(contenido);

});
/*document.addEventListener('click',agregaCaja);
document.addEventListener('click',prueba);
document.addEventListener('click',function (){window.alert('hola2');})*/

function agregaCaja(texto){
   // var cajas = document.getElementsByTagName('div');
    var nuevo = document.createElement('div');
    var texto = document.createTextNode(texto);
    nuevo.appendChild(texto);
    nuevo.setAttribute("class","caja");
    var padre = document.getElementsByTagName('body');
    padre[0].appendChild(nuevo);
}


function prueba()
{
    window.alert("hola");
}