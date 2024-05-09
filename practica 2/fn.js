primerArray = []
segundoArray = []
var largo = 0;

function buscarRick(largo){
    var ids = primerArray.concat(segundoArray);
    let url="https://rickandmortyapi.com/api/character"

    fetch(url)
        .then(response => response.json())
        .then(data => {

        var largo = data.info.count;
        console.log(largo)
        console.log((data.results).length)

        if (segundoArray.length==3 && primerArray.length==3) {

            var primerOrden = []
            var segundoOrden = []
            var arrayIds = []

            for(i=0; i<ids.length ;i++){
                arrayIds[i]=data[i].id
                }

            for(i=0; i<primerArray.length ;i++){
                for(j=0; j<arrayIds.length ;j++){
                    primerOrden[i]=arrayIds.indexOf(primerArray[i]);
                    segundoOrden[i]=arrayIds.indexOf(segundoArray[i]);
                    }
                }

            console.log(primerOrden)
            console.log(segundoOrden)

            document.getElementById("imagenesA").innerHTML = `<img src="${data[primerOrden[0]].image}"></img><img src="${data[primerOrden[1]].image}"></img><img src="${data[primerOrden[2]].image}"></img>`
            document.getElementById("imagenesB").innerHTML = `<img src="${data[segundoOrden[0]].image}"></img><img src="${data[segundoOrden[1]].image}"></img><img src="${data[segundoOrden[2]].image}"></img>`
        }
    })
}



function primerBusqueda(largo){

    buscarRick(largo)

    let valor=Number(document.getElementById("primerInput").value)

    if (valor=="" || primerArray.includes(valor) || segundoArray.includes(valor) ||valor<=0 ){
        alert("No se permiten valores vacíos, repetidos, ceros o negativos >:(")
    } 

    if (primerArray.length<3 && primerArray.includes(valor)==false && primerArray.includes(valor)==false && valor!="" && Math.sign(valor)==1 ){
            primerArray.push(valor)
        }
            
        
    
    if (primerArray.length==3){
        document.getElementById("primerInput").disabled = true
        document.getElementById("primerBoton").disabled = true
        console.log(primerArray)
    
        if (segundoArray.length==3){
    
            buscarRick(largo)
        }
    }
}

function segundaBusqueda(largo){

    buscarRick(largo)

    let valor2=Number(document.getElementById("segundoInput").value)

    if (valor2=="" || primerArray.includes(valor2) || primerArray.includes(valor2) || valor2<=0 ){
        alert("No se permiten valores vacíos, repetidos, ceros o negativos >:(")
    }    

    if(segundoArray.length<3 && segundoArray.includes(valor2)==false && primerArray.includes(valor2)==false && valor2!="" && valor2>0){
        segundoArray.push(valor2)
    }

    if (segundoArray.length==3){
        document.getElementById("segundoInput").disabled = true
        document.getElementById("segundoBoton").disabled = true

        console.log(segundoArray)
        
        if (primerArray.length==3){

            buscarRick(largo)
        }
    }
}

