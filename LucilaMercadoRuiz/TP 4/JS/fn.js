let array =[];
let cont = 0;
let mayor = 0;

function buscar() {
       
    if (cont<10){
        array[cont] = Number(document.getElementById("numeros").value)
       
            if (array[cont]>mayor) {
                mayor=array[cont];
            }
       cont++
    }

    console.log(array)
    console.log(mayor)
    rickapi(mayor)
}

function rickapi(mayor) {

    let urlrick="https://rickandmortyapi.com/api/character/"+mayor;
    let urlrandom="https://randomuser.me/api/"; 

    fetch(urlrick)
        .then(result => result.json())
        .then(data =>{

            console.log(data)
            let genero = data.species
            if(genero="Human"){

                let imagen = data.image

                document.getElementById("foto").innerHTML=imagen
            }
        })
    
    fetch (urlrandom)
        .then(result => result.json())
        .then(data =>{

            if(genero="Human"){

                let imagen2 = data.picture

                document.getElementById("datos").innerHTML=imagen2
            }

        })
}
