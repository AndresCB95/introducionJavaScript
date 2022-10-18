import datosreto, {dato} from './data.js'

export function resolver(arr){
    let pasos = []
    let bandera = false
    let n_array = arr.length
    let valor_ubicar = arr[n_array-1]
    for(let i = n_array-2; i>=0; i--){
        if(valor_ubicar < arr[i]){
            arr[i+1]= arr[i]
        }else{
            arr[i+1]=valor_ubicar
            bandera = true
            break
        }
        pasos.push(printArray(arr))
    }

    if(bandera===false){
        arr[0]=valor_ubicar
    }
    pasos.push(printArray(arr))
    return pasos
}

function printArray(arr){
    //elementp.innerHTML +=arr+"</br>"
    return arr+"</br>"
}

/*
var elementp = document.getElementById("myP")

for(let i=0; i<datosreto.length;i++){
    let n_array = datosreto[i]["n_array"]
    let numeros = datosreto[i]["numeros"]
    elementp.innerHTML +="</br>"+"datos "+dato +"</br>"
    elementp.innerHTML +="</br>"+"n ="+n_array +" numeros = "+numeros+"</br>"
    
    resolver(numeros)
}

 const getElemnt = (numeroN) => {
    return datosreto.find(
        (elemntoArray)=>elemntoArray["n_array"]==numeroN
    )
 }
let objeto_find=getElemnt(10)

console.log(objeto_find)
 elementp.innerHTML += "Elemento encontrado con n array"+ objeto_find["n_array"]+ " y array"+ objeto_find["numeros"] + "</br>"



 const getElemntFilter = (numeroN) => {

    return datosreto.filter(

        (elemntoArray)=>{
            return elemntoArray["n_array"]>=numeroN
        }

    )
 }

let objeto_filter=getElemntFilter(5)

console.log(objeto_filter)
for( let i = 0; i<objeto_filter.length; i++){
elementp.innerHTML += "Elemento encontrado en la posicion "+ i +" con n array"+ objeto_filter[i]["n_array"]+ " y array"+ objeto_filter[i]["numeros"]+"</br>"
}*/