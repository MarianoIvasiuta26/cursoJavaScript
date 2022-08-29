let aleatorio=Math.round(Math.random() * 100);
let minum, intentos;
let mensaje=document.getElementById("c_mensaje");
let intentosConsumidos=document.getElementById("c_intentos");
minum=0;
intentos=0;

do {
    minum=prompt("Ingrese un número entre 0 y 100");
    if(aleatorio>minum){
        mensaje.value="Más alto";
    }
    if(aleatorio<minum){
        mensaje.value="Más bajo";            
    }
    intentos++;
    intentosConsumidos.value=intentos;
} while (aleatorio != minum);

document.write("Correcto. Lo haz conseguido en " + intentos + " intentos");