/*
Ordena 3 números de mayor a menor
Permutaciones con 3 elementos
Posibilidades 3! = 3*2*1 = 6
abc=123
acb=132
bac=213
bca=231
cab=312
cba=321
*/

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a=prompt('Introduzca el primer número');
let b=prompt('Introduzca el segundo número');
let c=prompt('Introduzca el tercer número');

numbers.textContent = `Los números introducidos son: ${a}, ${b}, ${c}`

//###EJERCICIO


//###MAYOR A MENOR


if (a >= b && a >= c){
    if (b > c){
        result.textContent = `El orden de mayor a menor es: ${a}, ${b}, ${c}`
    }
    else{
        result.textContent = `El orden de mayor a menor es: ${a}, ${c}, ${b}`
    }
}

else if (b >= a && b>= c) {
    if (a > c){
        result.textContent = `El orden de mayor a menor es: ${b}, ${a}, ${c}`
    }
    else{
        result.textContent = `El orden de mayor a menor es: ${b}, ${c}, ${a}`
    }
}

else if (c >= a && c >= b) {
    if (a > b){
        result.textContent = `El orden de mayor a menor es: ${c}, ${a}, ${b}`
    }
    else{
        result.textContent = `El orden de mayor a menor es: ${c}, ${b}, ${a}`
    }
}


//###MENOR A MAYOR

if (a <= b && a <= c){
    if (b < c){
        result2.textContent = `El orden de menor a mayor es: ${a}, ${b}, ${c}`
    }
    else{
        result2.textContent = `El orden de menor a mayor es: ${a}, ${c}, ${b}`
    }
}

else if (b <= a && b <= c){
    if (a < c){
        result2.textContent = `El orden de menor a mayor es: ${b}, ${a}, ${c}`
    }
    else{
        result2.textContent = `El orden de menor a mayor es: ${b}, ${c}, ${a}`
    }
}

else if (c <= a && c <= b){
    if (a < b){
        result2.textContent = `El orden de menor a mayor es: ${c}, ${a}, ${b}`
    }
    else{
        result2.textContent = `El orden de menor a mayor es: ${c}, ${b}, ${a}`

    }
}