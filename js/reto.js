import datosreto, {dato} from './data.js'

function resolver(arr){
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
        printArray(arr)
    }

    if(bandera===false){
        arr[0]=valor_ubicar
    }
    printArray(arr)

}

function printArray(arr){
    elementp.innerHTML +=arr+"</br>"
}

var elementp = document.getElementById("myP")

for(let i=0; i<datosreto.length;i++){
    let n_array = datosreto[i]["n_array"]
    let numeros = datosreto[i]["numeros"]
    elementp.innerHTML +="</br>"+"datos "+dato +"</br>"
    elementp.innerHTML +="</br>"+"n ="+n_array +" numeros = "+numeros+"</br>"
    
    resolver(numeros)
}