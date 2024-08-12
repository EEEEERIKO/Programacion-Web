//ERIK VALENCIA CARDONA - 5 SEMESTRE - ING. SISTEMAS

// Ejercicio 1
function contrasenaValida(contrasena) {
    if (contrasena == "2Fj(jjbFsuj" || contrasena == "eoZiugBf&g9"){
        return true;
    } else {
        return false;
    }
}

console.log(contrasenaValida("2Fj(jjbFsuj")) // true
console.log(contrasenaValida("eoZiugBf&g9")) // true
console.log(contrasenaValida("hola")) // false
console.log(contrasenaValida("")) // false

// Ejercicio 2
function calcularImpuestos(edad, ingresos) {
    if((edad >= 18) && (ingresos >= 1000)){
        return ingresos*0.4;
    }else{
        return 0;
    }
}

console.log(calcularImpuestos(18, 1000)) // 400
console.log(calcularImpuestos(40, 10000)) // 4000
console.log(calcularImpuestos(17, 5000)) // 0
console.log(calcularImpuestos(30, 500)) // 0

// Ejercicio 3

function bmi(peso, altura) {
    let imc = peso / altura**2
    if(imc < 18.5){
        return "Bajo de peso"
    }else if(imc >= 18.5 && imc<25){
        return "Normal"
    }else if(imc >= 25 && imc < 30){
        return "Sobrepeso"
    }else{
        return "Obeso"
    }
      
}

console.log(bmi(65, 1.8)) // "Normal"
console.log(bmi(72, 1.6)) // "Sobrepeso"
console.log(bmi(52, 1.75)) //  "Bajo de peso"
console.log(bmi(135, 1.7)) // "Obeso"

// Ejercicio 4
function imprimirArreglo(arreglo){
    for(let i = 0; i < arreglo.length; i++){
        console.log(arreglo[i])
    }
}

imprimirArreglo([1, "Hola", 2, "Mundo"])

// Ejercicio 5
function likes(reacciones){
    if(reacciones>=1000){
        if(reacciones >= 1000000){
            return Math.floor(reacciones/1000000) + "M"
        }else{
            return Math.floor(reacciones/1000) + "K"
        }
    }else{
        return Math.floor(reacciones)
    }
}

console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"

// Ejercicio 6
function fizzBuzz(number){
    if(number%3 == 0 && number%5 == 0 ){
        return "fizzbuzz"

    }else if (number%3 == 0){
        return "fizz"
    } else if(number%5 == 0){
        return "buzz"
    } else{
        return number
    }
}

console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

// Ejercicio 7
function contarRango(number1, number2) {
    let counter = 0;
    for(; number1+1 < number2; number1++) {
        counter++;
    }
    return counter;
}

console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

// Ejercicio 8
function sumarRango(numeroInicial, numeroFinal){
    let sumatoria = 0;
    for(;numeroInicial < numeroFinal+1; numeroInicial++){
        sumatoria += numeroInicial;
    }
    return sumatoria;
}

console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0

// Ejercicio 9
function numeroDeAes(cadena){
    let counter = 0;
    for(let i = 0; i< cadena.length; i++){
        if(cadena[i] == "a" || cadena[i] == "A")
            counter++;
    }
    return counter;
}

console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

// Ejercicio 10
function numeroDeCaracteres(cadena, char){
    let counter = 0;
    for(let i = 0; i< cadena.length; i++){
        if(cadena[i] == char)
            counter++;
    }
    return counter
}

console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4



