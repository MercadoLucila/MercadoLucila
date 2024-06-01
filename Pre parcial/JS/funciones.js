function buscar(){
    var resultadoInput = document.querySelector("input[name='opcion']:checked").value;
    //var resultadoInput = document.getElementById("inputLocal").checked;
  
        if (resultadoInput=="local"){
            var url="personas.json"
        }else{
            var url="https://randomuser.me/api/?results=10"
        }
            fetch(url)
            .then(res => res.json())
            .then(data => {

                console.log(data.results.length)
                console.log(data.results[0].gender)
                var contadorMujeres= 0;
                var contadorHombres= 0;
                var contadorGeneral= 0;
                var personamayor=0;
                var fotopersonamayor
                var nombrePersonaMayor

                for (i=0;i<data.results.length;i++){

                    if (data.results[i].gender=="female"){
                        contadorGeneral++
                        contadorMujeres++
                        
                        var nombreMujer=(data.results[i].name.first)+" "+(data.results[i].name.last);
                        
                        console.log(nombreMujer)

                        document.getElementById("nombreMujeres").innerHTML+=`<p> ${data.results[i].name.first} ${data.results[i].name.last} ${data.results[i].dob.age} </p>`

                    }else{
                        contadorGeneral++
                        contadorHombres++
                        
                        var nombreHombre=(data.results[i].name.first)+" "+(data.results[i].name.last);
                        
                        console.log(nombreHombre)

                        document.getElementById("nombreHombres").innerHTML+=`<p> ${data.results[i].name.first} ${data.results[i].name.last} ${data.results[i].dob.age}</p>`

                    }

                    if (data.results[i].dob.age>personamayor){
                        personamayor=data.results[i].dob.age;
                        fotopersonamayor=data.results[i].picture.medium
                        nombrePersonaMayor=data.results[i].name.first;
                    }

                }

                document.getElementById("contadorMujeres").innerHTML+=`<p>Contador de Mujeres: ${contadorMujeres}</p>`
                document.getElementById("contadorHombres").innerHTML+=`<p>Conador de Hombres: ${contadorHombres}</p>`
                document.getElementById("contadorGeneral").innerHTML+=`<p>Contador general: ${contadorGeneral}</p>`
                document.getElementById("fotoPersonaMayor").innerHTML+=`<img src=${fotopersonamayor}><p>La persona de mayor edad es: ${nombrePersonaMayor}</p>`
            })
}

/*switch (data.results[i].gender) {
                        case female:
                            
                            break;
                        case male:
                        
                            break;
                    
                        default:
                            break;
                    }*/

