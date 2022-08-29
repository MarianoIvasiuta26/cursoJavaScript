//OPERADORES INCREMENTO/DECREMENTO Y PROMPT --> FUNCIÓN DE ENTRADA DE DATOS
let nombre=prompt("Introduce tu nombre por favor: ");
let apellido=prompt("Introduce tu apellido por favor: ");
let edad=prompt("Introduce tu edad: ");
let restando=prompt("¿Cuántos años deseas quitarte?");
edad -= restando;
document.write("<p>"); //se puede usar etiquetas html
document.write(nombre + " " + apellido + "<br/>" + "Te gustaría tener " + edad + " años");
document.write("</p>");