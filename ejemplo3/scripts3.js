//Declaraciones de arrays
let articulos= ["Zapatillas", "Camiseta", "Pantalón", "Medias"];
//let articulos=new Array("Zapatillas", "Camiseta", "Pantalón", "Medias"); --> Opción 2

document.write("<p> El primer artículo es <strong>");
document.write(articulos[0] + "</strong>");
document.write("</p>");
console.log("El tamaño del array es de: " + articulos.length + " elementos.");
document.write("<p> El último elemento es <strong>");
document.write(articulos[articulos.length-1] + "</strong></p>"); //--> para acceder al ultimo elemento del array

articulos.unshift("Balón"); //--> agrega elemento en la primera posicion del array

document.write("<p>Agregamos un elemento. Agregamos: <strong>");
document.write(articulos[0] + "</strong></p>");

document.write("<p> Agregamos un elemento al final: <strong>");
articulos.push(prompt("Introduce el artículo a agregar: ")); //--> Agrega un elemento al final
document.write(articulos[articulos.length-1] + "</strong></p>");

alert("Se borrará el primer elemento del array");
articulos.shift(); //--> borra el primer elemento

alert("Se borrará el último elemento del array");
articulos.pop(); //--> borra el último elemento