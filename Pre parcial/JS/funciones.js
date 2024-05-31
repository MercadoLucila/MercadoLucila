function buscar(){
    fetch("personas.json")
    .then(res => res.json())
    .then(data => {

        console.log(data.results.length)
        console.log(data.results[0].gender)
        var contadorMujeres= 0;
        var contadorHombres= 0;
        var contadorGeneral= 0;

        for (i=0;i<data.results.length;i++){

            if (data.results[i].gender=="female"){
                contadorGeneral++
                contadorMujeres++
                
                var nombreMujer=(data.results[i].name.first)+" "+(data.results[i].name.last);
                
                console.log(nombreMujer)

                document.getElementById("nombreMujeres").innerHTML+=`<p> ${data.results[i].name.first} ${data.results[i].name.last} </p>`
                

            }
            /*switch (data.results[i].gender) {
                case female:
                    
                    break;
                case male:
                
                    break;
            
                default:
                    break;
            }*/


            if (data.results[i].gender=="male"){
                contadorGeneral++
                contadorHombres++
                
                var nombreHombre=(data.results[i].name.first)+" "+(data.results[i].name.last);
                
                console.log(nombreHombre)

                document.getElementById("nombreHombres").innerHTML+=`<p> ${data.results[i].name.first} ${data.results[i].name.last} </p>`


            }

           }

        document.getElementById("contadorMujeres").innerHTML+=`<p>Contador de Mujeres: ${contadorMujeres}</p>`
        document.getElementById("contadorHombres").innerHTML+=`<p>Conador de Hombres: ${contadorHombres}</p>`
        document.getElementById("contadorGeneral").innerHTML+=`<p>Contador general: ${contadorGeneral}</p>`
        

    })
}