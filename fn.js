let array =[];
let mayor = 0;

function buscar() {
       
    if (array.length<10){
        array.push = Number(document.getElementById("numeros").value)
       
       cont++
    }

    console.log(array)
    console.log(mayor)
    rickapi(mayor)
}

function rickapi(mayor) {

    if (cont==10){

        let urlrick="https://rickandmortyapi.com/api/character/"+mayor;
        let urlrandom="https://randomuser.me/api/"; 

        fetch(urlrick)
            .then(result => result.json())
            .then(DataRickAndMorty =>{

                let genero = DataRickAndMorty.species

                console.log(genero)

                if(genero="Human"){

                    document.getElementById("foto").innerHTML=`<img src="${DataRickAndMorty.image}"></img>`
                }
            })
        
        fetch (urlrandom)
            .then(result => result.json())
            .then(DataRandomUser =>{
                
                if(genero="Human"){

                    document.getElementById("datos").innerHTML=`<img src="${DataRandomUser.results[0].picture.large}"></img>`
                }

            })
    }
}
