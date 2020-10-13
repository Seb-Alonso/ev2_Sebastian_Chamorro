import ejercicio1 from './modules/ejercicio1.js';

caja = document.getElementById("caja");

document.getElementById("ej1").addEventListener("click",()=>{
    caja.innerHTML = ejercicio1.data;
});