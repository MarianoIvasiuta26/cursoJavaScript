//BUCLE WHILE
console.log("-----WHILE-----");
let nombre, edad, poblacion;
        nombre=prompt("Introduce su nombre:","Escriba su nombre");

        while(!isNaN(nombre)){
            nombre=prompt("Introduce un nombre válido");
        }

        edad=prompt("Introduce su edad:", "Escriba su edad");

        while(edad<=0 || edad >105 || isNaN(edad)){
            edad=prompt("Introduce una edad válida");
        }

        poblacion=prompt("Introduce su población:", "Escriba su población");

        while(!isNaN(poblacion)){
            poblacion=prompt("Introduce una población válida");
        }