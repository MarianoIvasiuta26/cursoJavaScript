let repetir="si";
        
function suma(num1,num2){
        console.log("La suma es: " + (num1+num2));
    }

    function resta(num1,num2){
        console.log("La resta es: " + (num1-num2));

    }

    function multiplicacion(num1,num2){
        console.log("La multiplicación es: " + (num1*num2));

    }

    function division(num1,num2){
        console.log("La división es: " + (num1/num2));

    }
    
do{
    let operacion=prompt("¿Que operación quiere realizar?");
    let operador1=parseInt(prompt("Introduce el primer número"));
    let operador2=parseInt(prompt("Introduce el segundo número"));

    if (operacion == "sumar") {
        suma(operador1,operador2);
    }
    else if(operacion == "restar"){
        resta(operador1,operador2);
    }
    else if(operacion == "multiplicar"){
        multiplicacion(operador1,operador2);
    }
    else if(operacion == "dividir"){
        division(operador1,operador2);
    }
    else{
        alert("Error, operación no contemplada.");
    }
    repetir=prompt("¿Desea repetir?");
}while(repetir=="si");
