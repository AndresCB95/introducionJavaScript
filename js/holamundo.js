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
var arepas_vacias=[]

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
}else if(21===2.0){
    alert("Esto es verdadero x 2");
}
else{
    //alert("esto es falso")
}


// CONDICIONALES

var areparellena = 5000;
var arepaQueso = 10000;
var arepaCarne = 15000;

var bolsillo = 1;


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
var bolsillo = 1;

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


// CILOS

var valoresArepas = [5000,10000,15000,9000]
bolsillo = 1
for(var i=0; i<valoresArepas.length; i++){
    //alert(valoresArepas[i])
    if(bolsillo >= valoresArepas[i]){
        alert("Puedo comprar una arepa de valor "+ valoresArepas[i])
    }
}


var palabra_ingresada = "122355484" 

var palabra_alreves =""

for(var i = palabra_ingresada.length-1;i>=0;i--){
        palabra_alreves += palabra_ingresada[i]
}

console.log(palabra_alreves)


console.log("1"==1)
console.log("1"===1)

console.log(false==0)
console.log(false===0)

console.log("5"+1)
console.log("5"-1)


var elementp = document.getElementById("myP")

console.log(elementp)

console.log(elementp.innerHTML)

elementp.innerHTML="<p>"+palabra_alreves+"</p>"

document.write()


let rep = 1
i= 1
let n = 1

while(i<n){
    rep += rep * i;
    i++;
}

console.log(rep)

//elementp.innerHTML="<p> Factorial de "+ n + " = "+rep+"</p>"

rep = 1
i = 1
n = 1
do{
    rep += rep * i;
    i++;
}while(i<n)

//elementp.innerHTML="<p> Factorial con do while de "+ n + " = "+rep+"</p>"


// FUNCION - METODOS PARADIGMA PROGRAMACION FUNCIONAL

function holamundo(nombre){
    //elementp.innerHTML="<p> HOLA MUNDO JAVASCRIPT "+nombre+"</p>"
    return "<p> HOLA MUNDO JAVASCRIPT "+nombre+"</p>"
}

let rep_funcion = holamundo("Andres")
elementp.innerHTML = rep_funcion


const funcionAnonima = function(nombre){
    return "<p> HOLA MUNDO JAVASCRIPT "+nombre+"</p>"
}

let rep_fun_anonima = funcionAnonima("Andres con funcioon anonima")
elementp.innerHTML = rep_fun_anonima

const funcionFlecha = (nombre)=>{
    return "<p> HOLA MUNDO JAVASCRIPT "+nombre+"</p>"
}

let rep_funcion_flecha = funcionFlecha("Andres con funcion flecha")
elementp.innerHTML = rep_funcion_flecha

rep_funcion_flecha = "hola";


(
    function(nombre){
        document.write("<p> Funciona Anonima llamada el mismo con parametro "+nombre+" </p>")
    }
)("Andres");


function funA(){

    function funB(nombre){
        document.write(`llamado a la funcion B ${nombre}`)
    }

    document.write("llamado a la funcion A")

    funB("Andres")
}
funA()


function funC(){
    return function(nombre){
        document.write("Funcion Anonima Retornada"+nombre)
    }
}

funC()("Oscar")


const funcionAnonimaConFuncion = funC()

console.log(funcionAnonimaConFuncion)

funcionAnonimaConFuncion("Andres")


var c = function(a,b){
    document.write("</br>")
    return a+b
}

var b = 0;
b = c.apply(b,[2,3])
document.write("llamada por medio de un apply "+b)
b = c.call(b,3,4)
document.write("llamada por medio de un call "+b)












