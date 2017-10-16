var panta =  document.getElementById('pantallita');

var btnA = document.getElementById('btnA');
var btnB = document.getElementById('btnB');

btnA.addEventListener('click', function() {
        panta.value +=btnA.value;
})

btnB.addEventListener('click', function() {
    panta.value +=btnB.value;
})

