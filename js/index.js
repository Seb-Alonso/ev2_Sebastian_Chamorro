import ejercicio1 from './modules/ejercicio1.js';
import ejercicio2 from './modules/ejercicio2.js';

var caja = document.getElementById("caja");

window.cargar = ejercicio1.cargar;
window.registrar = ejercicio1.registrar.bind(ejercicio1);

document.getElementById("ej1").addEventListener("click",()=>{
    caja.innerHTML = ejercicio1.data;
    ejercicio1.cargar();

});

document.getElementById("ej2").addEventListener("click",()=>{
    caja.innerHTML = ejercicio2.data;
    ejercicio2.cargar();
});