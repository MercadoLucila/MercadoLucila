function boton() {
    var num1 = Number(document.getElementById("entrada1").value) 
    var num2 = Number(document.getElementById("entrada2").value) 
    let url="https://rickandmortyapi.com/api/character/"+num1+","+num2
    fetch (url)
        .then(response => response.json())
        .then(data => {
            var gen1=data[0].gender
            var gen2=data[1].gender
        
            console.log(url)
            console.log(gen1+gen2)

            if (gen1==gen2) {
                
                document.getElementById("resultado1").innerHTML= `<p>${data[0].name}</p>`
                document.getElementById("img1").innerHTML=`<img src=${data[0].image}></img>`
                document.getElementById("comparativa").innerHTML=`<img src="/MercadoLucila/LucilaMercadoRuiz/TP 2/css/check.png">`
                document.getElementById("name2").innerHTML=`<p>${data[1].name}</p>`
                document.getElementById("img2").innerHTML=`<img src=${data[1].image}></img>`   
            }
            if (gen1!=gen2) {
                document.getElementById("name1").innerHTML= `<p>${data[0].name}</p>`
                document.getElementById("img1").innerHTML=`<img src=${data[0].image}></img>`
                document.getElementById("comparativa").innerHTML=`<img src="/MercadoLucila/LucilaMercadoRuiz/TP 2/css/no.png"></img>`
                document.getElementById("name2").innerHTML=`<p>${data[1].name}</p>`
                document.getElementById("img2").innerHTML=`<img src=${data[1].image}></img>`
            }
        })
}