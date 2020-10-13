import ejercicio1 from './modules/ejercicio1.js';

var caja = document.getElementById("caja");

window.cargar = ejercicio1.cargar;

document.getElementById("ej1").addEventListener("click",()=>{
    caja.innerHTML = ejercicio1.data;
    ejercicio1.cargar();

});