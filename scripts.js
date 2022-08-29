alert("Bienvenidos a mi página");

//DECLARACION DE VARIABLES

let nombre = "Mariano";

let puntuacion = 0;

let record;
record= 5000;

console.log("Mi nombre es: " + nombre);

//Operaciones

console.log((5+5)*55);

//EJEMPLO DE OPERACIONES\\

    let precioUnidad, cantidad, total;
    precioUnidad = 5;
    cantidad = 100;
    total = precioUnidad * cantidad;

    console.log("El precio total es: " + total);

//FUNCIÓN NUMBER();
let camisetas, pantalones, totalArticulos;
camisetas = "5";
pantalones = 5;
totalArticulos = Number(camisetas) + pantalones; //Se convirtió el valor de camisetas a un tipo Number
console.log("El total de la compra es: " + totalArticulos);

//CONDICIONALES 
//Operadores lógicos ---> (|| y &&)
console.log("-------CONDICIONALES-------");
let precioCoche=500000;
let dineroAhorrado=prompt("Ingrese cuanto dinero tiene ahorrado");
let edad=prompt("Introduce tu edad:");
let loteria=prompt("¿Haz ganado la lotería?");

if(dineroAhorrado >= precioCoche || loteria == "si" && edad >= 18){
    console.log("Puedes comprar el coche");
}else{
    console.log("No puedes comprar el coche");
}

//BUCLES
//WHILE
console.log("-------WHILE-------");
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
let contador=0;

while(contador < meses.length){
    console.log(meses[contador]);
    contador++;
}
