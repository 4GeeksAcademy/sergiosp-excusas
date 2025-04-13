import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function excusasAlAzahar() {
    
    let quien = ['Mi perro', 'Mi madre', 'El coche', 'Yo', 'El fontanero'];
    let accion = ['se ha roto', 'se ha comido', 'no arranca por', 'estoy', 'viene a cambiarme', 'tiene que ir'];
    let que = ['mis deberes', 'la batería', 'al hospital', 'enfermo', 'con gripe', 'la pierna', 'la caldera'];
    let cuando = ['cuando iba a salir', 'esta mañana', 'mientras hacía ejercicio', 'ahora mismo'];
  
    let randomQuien = quien[Math.floor(Math.random()*quien.length)];
    let randomAccion = accion[Math.floor(Math.random()*accion.length)];
    let randomQue = que[Math.floor(Math.random()*que.length)];
    let randomCuando = cuando[Math.floor(Math.random()*cuando.length)];

    return randomQuien + ' ' + randomAccion + ' ' + randomQue + ' ' + randomCuando

  }

  document.getElementById('excusas').innerHTML = excusasAlAzahar();
  
  
};
