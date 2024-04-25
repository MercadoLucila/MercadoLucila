function buscar () {
    var valor= document.getElementById("numero").value
    fetch ("https://rickandmortyapi.com/api/character/"+ valor)
        .then(response => response.json())
        .then(data => {
            document.getElementById("mostrar").innerHTML = `
            <div>${data.name}</div>
            <img src="${data.image}"></img>
            `
            

        });
}