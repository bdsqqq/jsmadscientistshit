if ('geolocation' in navigator){
    console.log('Geolocalização está disponivel');
    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById('latitude').textContent = lat
        document.getElementById('longitude').textContent = lon
        


        const data = { lat, lon};
        const options = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json)
        });
    } else {
    console.log('Geolocalização não está disponivel')
}