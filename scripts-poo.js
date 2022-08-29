//POO
let miboton=document.getElementById("boton1"); //--> se guarda unn objeto en una variable
miboton.style.width="150px";
miboton.style.height="50px";
//miboton.style.backgroundColor="blue";

let miboton2=document.getElementById("boton2"); //--> se guarda unn objeto en una variable
miboton2.style.width="150px";
miboton2.style.height="50px";

let miboton3=document.getElementById("boton3"); //--> se guarda unn objeto en una variable
miboton3.style.width="150px";
miboton3.style.height="50px";

let cuadrotexto=document.getElementById("texto1"); //--> se guarda unn objeto en una variable

//Manipular métodos 
//Método focus() --> capacidad de tener el foco en objetos
miboton2.focus();
cuadrotexto.style.backgroundColor="red";
cuadrotexto.value="Escriba aquí";