const apikey = "tT8somsIteAbPpHMfGb3V6jXGDksegfL"
const url= "https://api.giphy.com/v1/gifs/random"

const fecthApi = fetch(url+"?api_key="+apikey) 


async function peticionAsync(){

    await fecthApi.then
    (
        (dato)=>dato.json()

    )
    .then(
        
        (dato)=>{
            let crearimg = document.createElement("img")
            crearimg.src=dato.data.images.original.url
            document.body.append(crearimg)
            console.log(dato.data.images.original.url)
        }

    )



    let elementop = document.createElement("p")
    elementop.innerHTML +="</br> No espera al fecth </br>"
    document.body.append(elementop)
}

peticionAsync()


