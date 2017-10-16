var btnCalcular = document.getElementById('btnCalcular');


btnCalcular.addEventListener('click', function(){
    var propina = document.getElementById('propina');
    var propinaPersona =  calcularPropina();
    propina.innerHTML = 'total ' + propinaPersona + ' pesos';
});

function calcularPropina(){
    var calcula = document.getElementById('calculadora');
    var numPersonas = parseInt(calcula.personas.value);
    var totalCuenta = parseInt(calcula.total.value);
    var servicio = parseInt(calcula.servicio.value);
 
  return totalCuenta/numPersonas*servicio/100;
}