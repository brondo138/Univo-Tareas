let conditionMain;
let condition;

//Creacion de Funciones
//Ejercicio 3
function suma(a,b){
    let resultado = a+b;
    alert(`${a} + ${b} = ${resultado}`);
}

//Ejercicio 7
function convertirCelsiusAFahrenheit (celsius) {
    let fahrenheit = (celsius*9/5+32);
    return fahrenheit.toFixed(2);
}

//creacion de Objetos
//Ejercicio 5
const coche = {
    marca:"Toyota",
    modelo:"Yaris",
    año:2017
}

//Ejercicio 6
const calculadora = {
    suma: function(a, b) {
        return a + b;
    },
    resta: function(a, b) {
        return a - b;
    },
    multi: function(a, b) {
        return a * b;
    },
    division: function(a, b) {
        return a / b;
    }
};

//Ejercicio 8
const persona = {
    hombre: function(altura){
        let pesoIdeal = 50 + 0.9*(altura-152);
        alert(`El peso ideal segun Devine es: ${pesoIdeal}`);
    },
    mujer: function(altura){
        let pesoIdeal = 45.5 + 0.9*(altura-152);
        alert(`El peso ideal segun Devine es: ${pesoIdeal}`);
    }
}


//Programa Main
do {
    conditionMain = true;
    let opcion = Number(prompt("Ingrese la opcion del ejercicio que quiera ingresar\n1. Ejercicio 1\n2. Ejercicio 2\n3. Ejercicio 3\n4. Ejercicio 4\n5. Ejercicio 5\n6. Ejercicio 6\n7. Ejercicio 7\n8. Ejercicio 8\n9. Ejercicio 9\n10. Ejercicio 10\n11. Ejercicio 11").trim());
    switch (opcion) {
        //ejercicio 1
        case 1:
            do {
                condition = true;
                let num1 = prompt("Ingresa un numero").trim();                     
                if (!isNaN(num1)){
                    if(num1 >= 1){
                        alert(`El dato ${num1} es positivo`);
                        condition = false;
                    }else if(num1<=-1){
                        alert(`El dato ${num1} es negativo`)
                        condition = false;
                    }else{
                        alert(`el dato es 0`)
                        condition = false;
                    }
                }else{
                    alert("ERROR: Ingresa un dato numerico");
                }
            } while (condition);
            break;
        case 2:
            do {
                condition = true;
                let num = Number(prompt("Ingresa un numero entero").trim());
                if(!isNaN(num) && Number.isInteger(num)){
                    if(num % 2 === 0){
                        alert(`El numero ${num} es par`);
                        condition = false;
                    }else{
                        alert(`El numero ${num} es impar`);
                        condition = false;
                    }
                }else{
                    alert("ERROR: Ingresa un dato numerico entero valido");
                }
            } while (condition);
            break;
        case 3:
            do {
                condition = true;
                let num1 = parseFloat(prompt("Ingresa un numero").trim());
                let num2 = parseFloat(prompt("Ingresa un numero").trim());
                if(!isNaN(num1) && !isNaN(num2)){
                    suma(num1,num2);
                    condition = false;
                }else{
                    alert("ERROR: Ingrese un dato numerico valido");
                }
            } while (condition);
            break;
        case 4:
            do {
                condition = true;
                let dia = Number(prompt("Ingresa un numero del 1 al 7").trim());
                switch (dia) {
                    case 1:
                        alert("1. Lunes");
                        condition = false;
                        break;
                    case 2:
                        alert("2. Martes");
                        condition = false;
                        break;
                    case 3:
                        alert("3. Miercoles");
                        condition = false;
                        break;
                    case 4:
                        alert("4. Jueves");
                        condition = false;
                        break;
                    case 5:
                        alert("5. Viernes");
                        condition = false;
                        break;
                    case 6:
                        alert("6. Sabado");
                        condition = false;
                        break;
                    case 7:
                        alert("7. Domingo");
                        condition = false;
                        break;
                    default:
                        alert("ERROR: Ingresa un dato numerico del 1 al 7");
                }
            } while (condition);
            break;
        case 5:
            console.log(`Su coche ${coche.marca} ${coche.modelo} es del año ${coche.año}`);
            alert("El mensaje fue cargado a la consola");
            break;
        case 6:
            do {
                condition = true;
                let opcionCalc = Number(prompt("1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Salir").trim());
                switch (opcionCalc) {
                    case 1:
                        num1 = parseFloat(prompt("Ingresa un número").trim());
                        num2 = parseFloat(prompt("Ingresa otro número").trim());
                        if (!isNaN(num1) && !isNaN(num2)){
                        alert(`${num1} + ${num2} = ${calculadora.suma(num1,num2)}`);
                        }else{
                            alert("Ingresa un dato numerico valido");
                        }
                        break;
                    case 2:
                        num1 = parseFloat(prompt("Ingresa un número").trim());
                        num2 = parseFloat(prompt("Ingresa otro número").trim());
                        if (!isNaN(num1) && !isNaN(num2)){
                        alert(`${num1} - ${num2} = ${calculadora.resta(num1,num2)}`);
                        }else{
                            alert("Ingresa un dato numerico valido");
                        }
                        break;
                    case 3:
                        num1 = parseFloat(prompt("Ingresa un número").trim());
                        num2 = parseFloat(prompt("Ingresa otro número").trim());
                        if (!isNaN(num1) && !isNaN(num2)){
                        alert(`${num1} X ${num2} = ${calculadora.multi(num1,num2)}`);
                        }else{
                            alert("Ingresa un dato numerico valido");
                        }
                        break;
                    case 4:
                        num1 = parseFloat(prompt("Ingresa un número").trim());
                        num2 = parseFloat(prompt("Ingresa otro número").trim());
                        if (!isNaN(num1) && !isNaN(num2)){
                        }else{
                            alert("Ingresa un dato numerico valido");
                            alert(`${num1} ÷ ${num2} = ${calculadora.division(num1,num2)}`);
                        }
                        break;
                    case 5:
                        condition = false; 
                        break;
                    default:
                        alert("ERROR: Ingrese una opcion valida.");
                }
            } while (condition);
            break;
        case 7:
            do {
                condition = true
                let celsius = parseFloat(prompt("Ingresa la temperatura en Celsius que desees convertir a Fahrenheit").trim());
                if (!isNaN(celsius)){
                    alert(`${celsius}° Celsius = ${convertirCelsiusAFahrenheit(celsius)}° Fahrenheit`);
                    condition = false;
                }else{
                    alert("Ingresa un dato numerico valido");
                }
            } while (condition);
            break;
        case 8:
            do {
                condition = true;
                let genero = Number(prompt("Ingrese su Genero\n1. Masculino\n2. Femenino").trim());
                let estatura = parseFloat(prompt("Ingrese su estatura en centimetros").trim());
                
                if(!isNaN(estatura)){
                    switch (genero) {
                        case 1:
                            persona.hombre(estatura);
                            break;
                        case 2:
                            persona.mujer(estatura);
                            break;
                        default:
                            alert("Ingresa datos valido");
                            break;
                    }
                }else{
                    alert("Ingresa datos validos");
                }
            } while (condition);
            break;
        case 9:
            break;
        case 10:
            break;
        case 11:
            break;
        case 12:
            conditionMain = false;
            break;
        default:
            alert("ERROR: Ingrese una opcion valida");
    }
} while (conditionMain);