primerArray = []
segundoArray = []

function primerBusqueda(){
    if (primerArray.length<3){
        primerArray.push(Number(document.getElementById("primerInput").value))
    }
    if (primerArray.length==3){
        document.getElementById("primerInput").disabled = true

        if (segundoArray.length==3){

            buscarRick()
        }

    }

}

function segundaBusqueda(){
    if(segundoArray.length<3){
        segundoArray.push(Number(document.getElementById("segundoInput").value))
    }
    if (segundoArray.length==3){
        document.getElementById("segundoInput").disabled = true

        if (primerArray.length==3){

            buscarRick()
        }
    }
}

function buscarRick(){
    let url="https://rickandmortyapi.com/api/character/"+primerArray+","+segundoArray
    fetch(url)
    .then(result => result.json())
    .then(data => {

        document.getElementById("imagenesPrimerGrupo").innerHTML=`<img src="${data[0].image}"></img><img src="${data[1].image}"></img><img src="${data[2].image}"></img>`
        
        document.getElementById("imagenesSegundoGrupo").innerHTML=`<img src="${data[3].image}"></img><img src="${data[4].image}"></img><img src="${data[5].image}"></img>`
    
    })

}
