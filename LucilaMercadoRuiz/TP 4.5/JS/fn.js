primerArray = []
segundoArray = []
imagenes = []
function primerBusqueda(){

    let valor=Number(document.getElementById("primerInput").value)

    if (primerArray.includes(valor)){
        alert("No se permiten valores repetidos! >:(")
    }

    if (primerArray.length<3 && primerArray.includes(valor)==false){
        primerArray.push(valor)
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

    let valor2=Number(document.getElementById("segundoInput").value)

    if (segundoArray.includes(valor2)){
        alert("No se permiten valores repetidos! >:(")
    }


    if(segundoArray.length<3 && segundoArray.includes(valor2)==false){
        segundoArray.push(valor2)
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

    fetch("https://rickandmortyapi.com/api/character/"+primerArray+","+segundoArray)
        .then(response => response.json())
        .then(data => {

            console.log("https://rickandmortyapi.com/api/character/"+primerArray+","+segundoArray)
            console.log(data)

                let cont=0;

                for (i=0; cont<6 ;i++){
                    primerArray.forEach((element) => if (data[i].id==(element)){
                        imagenes[cont]=data[i].image
				        cont++
                        }
                    );
                   /* if (data[i].id==primerArray[1]){
                        imagenes[1]=data[i].image
                    }
                    if (data[i].id==primerArray[2]){
                        imagenes[2]=data[i].image
                    }
                    if (data[i].id==segundoArray[0]){
                        imagenes[3]=data[i].image
                    }
                    if (data[i].id==segundoArray[1]){
                        imagenes[4]=data[i].image
                    }
                    if (data[i].id==segundoArray[2]){
                        imagenes[5]=data[i].image
                    } */
                }

                if (imagenes.length==3){               
                    document.getElementById("imagenesPrimerGrupo").innerHTML=`<img src="${imagenes[0]}"></img><img src="${imagenes[1]}"></img><img src="${imagenes[2]}"></img>`
                    document.getElementById("imagenesSegundoGrupo").innerHTML=`<img src="${imagenes[3]}"></img><img src="${imagenes[4]}"></img><img src="${imagenes[5]}"></img>`
                    }

        })   
    
}

/*   
fetch(`https://rickandmortyapi.com/api/character/${primerArray[0]},${primerArray[1]},${primerArray[2]}`)

for (i=0; i<6; i++) {

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
