function boton() {
    var num1 = document.getElementById("entrada1").value 
    var num2 = document.getElementById("entrada2").value 
    fetch ("https://rickandmortyapi.com/api/character/"+num1+","+num2)
        .then(response => response.json())
        .then(data => {
            var gen1=data[0].gender
            var gen2=data[1].gender

            if (gen1==gen2) {
                
                document.getElementById("name1").innerHTML= `
                <div>
                    <p>${data[0].nombre}</p>
                    <img src=${data[0].image}></img>
                </div>

                <img url="/LucilaMercadoRuiz/TP 3/check.png"></img>

                <div>
                    <p>${data[1].nombre}</p>
                    <img src=${data[1].image}></img>
                </div>

                `
            }
            else {
                document.getElementById("name1").innerHTML= `
                <div>
                    <p>${data[0].nombre}</p>
                    <img src=${data[0].image}></img>
                </div>

                <img url="/LucilaMercadoRuiz/TP 3/no.png"></img>

                <div>
                    <p>${data[1].nombre}</p>
                    <img src=${data[1].image}></img>
                </div>

                `
                
            }
        })
}