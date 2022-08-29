 //RELLENAR ARRAY CON ELEMENTOS SIN CONOCER SU TAMAÑO
 let trabajadores = new Array(); //Declaramos array vacío ya que no conocemos cuantos elementos tendrá
 let persona="";
 let contador=0;

 while(persona != "salir"){
     persona=prompt("Introduzca el nombre de un trabajador o escriba 'salir' para terminar el programa.");
     trabajadores[contador]=persona;
     contador++;
 }

 trabajadores.pop(); //Elimina la palabra "salir"

 for(let i=0; i<trabajadores.length;i++){
     document.write(trabajadores[i] + "</br>");
 }