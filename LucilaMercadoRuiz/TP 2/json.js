function boton() {
    var num1 = document.getElementById("entrada1").value 
    var num2 = document.getElementById("entrada2").value 
    fetch ("https://rickandmortyapi.com/api/character/"+num1+","+num2)
        .then(response => response.json())
        .then(data => {
            var gen1=data[0].gender
            var gen2=data[1].gender

            if (gen1==gen2) {
                
                document.getElementById("name1").innerHTML= `<p>${data[0].name}</p>`
                document.getElementById("img1").innerHTML=`<img src=${data[0].image}></img>`
                document.getElementById("comparativa").innerHTML=`<img src="/LucilaMercadoRuiz/TP 3/css/check.png"></img>`
                document.getElementById("name2").innerHTML=`<p>${data[1].name}</p>`
                document.getElementById("img2").innerHTML=`<img src=${data[1].image}></img>`   
            }
            if (gen1!=gen2) {
                document.getElementById("name1").innerHTML= `<p>${data[0].name}</p>`
                document.getElementById("img1").innerHTML=`<img src=${data[0].image}></img>`
                document.getElementById("comparativa").innerHTML=`<img src="/LucilaMercadoRuiz/TP 3/css/no.png" ></img>`
                document.getElementById("name2").innerHTML=`<p>${data[1].name}</p>`
                document.getElementById("img2").innerHTML=`<img src=${data[1].image}></img>`
            }
        })
}