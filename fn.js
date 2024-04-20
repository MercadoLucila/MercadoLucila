function boton() {
    const urlrandomuser="https://randomuser.me/api/";
    fetch (urlrandomuser)
        .then (response => response.json())
        .then (data =>{
            console.log(data)
        
            let longitude=data.results[0].location.coordinates.longitude
            let latitude=data.results[0].location.coordinates.latitude
        //    let name=data.results[0].name
     
     /*
        container = L.DomUtil.get('map');

        if (container != null){
            container._leaflet_id=null;
        }*/
                let map= L.map('map').setView([longitude, latitude], 13);

                
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
                
                var marker = L.marker([longitude, latitude]).addTo(map);
          
        })
}