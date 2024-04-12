function buscar () {
    var valor= document.getElementById("numero").value
    fetch ("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            if (data.id==valor) {
            document-getElementById("mostrar").innerHTML= `
            
            <div>
                <img src="${data.image}" alt="foto">
            </div>
            `


            }

            
            

        });
}