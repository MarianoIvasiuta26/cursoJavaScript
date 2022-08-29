//CONDICIONALES
console.log("-----CONDICIONALES-----");
let cuerpo=document.getElementById("cuerpo");
let colorWeb=prompt("Escriba el color que desee para el fondo. Azul/Rojo/Verde").toLowerCase();

//Métodos toLowerCase y toUpperCase

if(colorWeb == "azul"){
    cuerpo.style.backgroundColor="blue";
}else if(colorWeb== "rojo"){
    cuerpo.style.backgroundColor="red";
}else if(colorWeb=="verde"){
    cuerpo.style.backgroundColor="green";
}else{
    alert("El color ingresado no está contemplado por el programa");
}

