function boton() {
    const urlrandomuser="https://randomuser.me/api/";
    fetch (urlrandomuser)
        .then (response => response.json())
        .then (data =>{
            console.log(data)
        
            let longitude=data.results[0].location.coordinates.longitude
            let latitude=data.results[0].location.coordinates.latitude
            let name=data.results[0].name
            
            console.log(name)
        })
}