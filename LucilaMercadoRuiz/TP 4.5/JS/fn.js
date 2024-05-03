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

    fetch(`https://rickandmortyapi.com/api/character/${primerArray[0]},${primerArray[1]},${primerArray[2]}`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

            document.getElementById("imagenesPrimerGrupo").innerHTML=`<img src="${data[0].image}"></img>`
            
        })   
    
}

/*   for (i=0; i<6; i++) {

                if (data[i].id==primerArray[0]) {
                    document.getElementById("imagenesPrimerGrupo").innerHTML=`<img src="${data[i].image}"></img>`
                }
            }
            for (j=0; j<6; j++) {

                if (data[j].id==primerArray[1]) {
                    document.getElementById("imagenesPrimerGrupo").innerHTML=`<img src="${data[j].image}"></img>`
                }
            }
           
*/
