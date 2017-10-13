var btnCalcular = document.getElementById('btnCalcular');


btnCalcular.addEventListener('click', function(){
    var propina = document.getElementById('propina');
    var propinaPersona =  calcularPropina();
    propina.innerHTML = 'total ' + propinaPersona + ' pesos';
});

function calcularPropina(){
    var calcula = document.getElementById('calculadora');
   // var total = document.getElementById('total');
    var numPersonas = parseInt(calcula.personas.value);
    var totalCuenta = parseInt(calcula.total.value);
    var servicio = parseInt(calcula.servicio.value);
 //   var personas = document.getElementById('personas');
  //  var servicio = document.getElementById('servicio');
  return totalCuenta/numPersonas*servicio/100;
}