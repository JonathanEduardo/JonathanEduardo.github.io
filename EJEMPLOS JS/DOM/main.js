var caja = document.getElementsByTagName('div');
var texto = document.createTextNode('caja4');
nuevo.appendChild(texto);
nuevo.setAttribute("class","caja");
var padre = document.getElementsByTagName('body');
padre[0].appendChild(nuevo);