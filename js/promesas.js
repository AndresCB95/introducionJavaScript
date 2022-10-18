import {resolver} from './reto.js'


const promesa = new Promise(

    (resolverPromesa,reject)=>{

            setTimeout(

                ()=>{
                    
                    let rep = resolver([1,2,3,5,4])
                    rep = null
                    if(rep != null){
                        resolverPromesa(rep)
                    }else{
                        reject("Hubo un error")
                    }

                }
               ,
               5000
            )

    }

)
var elemetop = document.getElementById("myP")

promesa.then(

    (repParam)=>{

        
        elemetop.innerHTML +="</br>"
        elemetop.innerHTML +="El resultado es:</br>"
        
        for( let i = 0; i< repParam.length; i++ ){
            elemetop.innerHTML += repParam[i]
        }
    }


)

promesa.catch(

    (rep)=> {
        alert(rep)
    }

)

elemetop.innerHTML +="</br>Promesa no resuelta:</br>"
