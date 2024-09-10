document.addEventListener("DOMContentLoaded", function() {

/* RETO 1 */

    let cambiarTexto = document.getElementById("cambiar");
    
    cambiarTexto.textContent = "Programacion FullStack";

/* RETO 2 */

    let operador1 = parseInt(document.getElementById("operador1").textContent);

    let operador2 = parseInt(document.getElementById("operador2").textContent);


    let suma = document.getElementById("suma"); 


    suma.textContent = operador1 + operador2; 

/* RETO 3*/

    const botonEstilo= document.getElementById("estilos");

    botonEstilo.classList.add("button"); 

/* RETO 4 */

const frutas = ["manzana", "mandarina", "pera"];

const lista = document.getElementById("lista");

frutas.forEach(function(fruta) {
  let li = document.createElement("li");

  li.textContent = fruta;

  lista.appendChild(li);

});



})