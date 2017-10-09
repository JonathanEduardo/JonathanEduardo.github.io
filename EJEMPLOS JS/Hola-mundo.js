document.write("hola mundo desde java script");
//window.alert("Emergencia");
console.log("Hola para consola"); //para depurar me sirve para encontrar errores
 //window.alert("Emergencia");

function imprimeNumeros(arr) {
    for(var i = 0; i<arreglo.length;i++){
        document.write(arr[i]);
        document.write("<br>");
    }
   
}

document.write("hola mundo desde java script");
/*notacion literal de arreglos */
var arreglo = [3,5,6];
imprimeNumeros(arreglo); //llamado a la funcion
console.log("Hola para consola"); //para depurar


/* notacion constructor de arreglo*/
var arreglo2 = new Array(9,10,15);
imprimeNumeros(arreglo2); 

/* noyttacion literal de objetos */
var triangulo = {
    base: 3,
    altura: 5,
    area: function(){
        console.log("area =" + this.base * this.altura);
    }
}
