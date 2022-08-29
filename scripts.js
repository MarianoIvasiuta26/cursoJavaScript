alert("Bienvenidos a mi página");

//DECLARACION DE VARIABLES

let nombre = "Mariano";

let puntuacion = 0;

let record;
record= 5000;

// Ejemplo --> alert("Mi nombre es: " + nombre);

//Operaciones

// Ejemplo --> alert((5+5)*55);

//EJEMPLO DE OPERACIONES\\

    var precioUnidad, cantidad, total;
    precioUnidad = 5;
    cantidad = 100;
    total = precioUnidad * cantidad;

//FUNCIÓN NUMBER();
var camisetas, pantalones, totalArticulos;
camisetas = "5";
pantalones = 5;
totalArticulos = Number(camisetas) + pantalones; //Se convirtió el valor de camisetas a un tipo Number

//CONDICIONALES 
//Operadores lógicos ---> (|| y &&)
var precioCoche=500000;
var dineroAhorrado=prompt("Ingrese cuanto dinero tiene ahorrado");
var edad=prompt("Introduce tu edad:");
var loteria=prompt("¿Haz ganado la lotería?");

if(dineroAhorrado >= precioCoche || loteria == "si" && edad >= 18){
    console.log("Puedes comprar el coche");
}else{
    console.log("No puedes comprar el coche");
}

//BUCLES
//WHILE
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var contador=0;

while(contador < meses.length){
    console.log(meses[contador]);
    contador++;
}

console.log("Mi nombre es: " + nombre);

