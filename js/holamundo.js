//alert("Hola Mundo");

var variable_1 = "Hola mundo en una variable";
var variable_2 = 0;


//alert(variable_1)
//alert(variable_2)


variable_1 = variable_1 + variable_2

//alert(variable_1)

variable_2_1 = variable_2 + 10 + "1"
alert(variable_2_1)
variable_2_2 = variable_2 + 10 - "1"
alert(variable_2_2)
//alert(variable_2)

variable_2 = variable_2 + "10"

//alert(variable_2)


//alert(variable_1.length)

console.log("Hola mundo")

var arepas = ["Arepa Rellena","Arepa Queso", "Arepa sencilla"]

//alert(arepas[1])

arepas[1]="Arepa con Carne"

//alert(arepas)

delete arepas[1]

//alert(arepas)

arepas.push("Arepa")

//alert(arepas)
//alert(arepas.length)

const arepasConstante = ["Arepa Rellena","Arepa Queso", "Arepa sencilla"]

arepasConstante.push("Arepa")

//alert(arepasConstante)



var menor = 1 < 1

var menorSrtring = 1 < "4"

console.log(menor)
console.log(menorSrtring)

var menorIgual= 1<=1
console.log(menorIgual)

if(1 != 1){
    alert("Esto es verdadero");
}else if(2===2.0){
    alert("Esto es verdadero x 2");
}
else{
    alert("esto es falso")
}


var areparellena = 5000;
var arepaQueso = 10000;
var arepaCarne = 15000;

var bolsillo = 12000;


if(bolsillo >= areparellena){
    var cantidad = bolsillo / areparellena
    alert("Puedo comparar arepa rellena unidades= "+cantidad)
}

if(bolsillo >= arepaQueso){
    var cantidad = bolsillo / arepaQueso
    alert("Puedo comparar arepa queso unidades= "+cantidad)
}

if(bolsillo >= arepaCarne){
    var cantidad = bolsillo / arepaCarne
    alert("Puedo comparar arepa carne unidades= "+cantidad)
}


var valoresArepas = [5000,10000,15000]
var bolsillo = 12000;

if(bolsillo >= valoresArepas[0]){
    var cantidad = bolsillo / valoresArepas[0]
    alert("Puedo comparar arepa rellena unidades= "+cantidad)
}

if(bolsillo >= valoresArepas[1]){
    var cantidad = bolsillo / valoresArepas[1]
    alert("Puedo comparar arepa queso unidades= "+cantidad)
}

if(bolsillo >= valoresArepas[2]){
    var cantidad = bolsillo / valoresArepas[2]
    alert("Puedo comparar arepa carne unidades= "+cantidad)
}

var valoresArepas = [5000,10000,15000,9000]
bolsillo = 12000
for(var i=0; i<valoresArepas.length; i++){
    alert(valoresArepas[i])
    if(bolsillo >= valoresArepas[i]){
        alert("Puedo comprar una arepa de valor "+ valoresArepas[i])
    }
}








