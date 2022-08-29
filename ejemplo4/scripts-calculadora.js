let num1=prompt("Ingrese el primer número");
let num2=prompt("Ingrese el segundo número");

if(!isNaN(num1) && !isNaN(num2)){

    let operacion= prompt("¿Qué operación desea realizar? suma/resta/multiplicación/división").toLowerCase();
    
    if(operacion == "suma"){
        alert(parseInt(num1)+ parseInt(num2));
    }else if(operacion == "resta"){
        alert(parseInt(num1)-parseInt(num2));
    }else if(operacion=="multiplicacion" || operacion=="multiplicación"){
        alert(parseInt(num1) * parseInt(num2));
    }else if(operacion=="division" || operacion=="división"){
        alert(parseInt(num1) / parseInt(num2)); 
    }else{
        alert("Operación no soportada por la calculadora");
    }
}