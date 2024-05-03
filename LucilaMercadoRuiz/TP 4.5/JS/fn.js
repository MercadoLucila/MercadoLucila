primerArray = []
segundoArray = []

function primerBusqueda(){

    if (primerArray.length<3){
        primerArray.push(Number(document.getElementById("primerInput").value))
    }
    if (primerArray.length==3){
        document.getElementById("primerInput").disabled = true
        console.log(primerArray)

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
        console.log(segundoArray)
        if (primerArray.length==3){

            buscarRick()
        }
    }
}

function buscarRick(){ 

    const ids=primerArray.concat(segundoArray)

    fetch("https://rickandmortyapi.com/api/character/"+ids)
        .then(result => result.json())
        .then(data => {

            document.getElementById("imagenesPrimerGrupo").innerHTML=`<img src="${data[5].image}"></img>`
                
        })   
    
}
