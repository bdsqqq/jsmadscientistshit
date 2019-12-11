if ('geolocation' in navigator){
    console.log('Geolocalização está disponivel');
    navigator.geolocation.getCurrentPosition(position => {
        document.getElementById('latitude').textContent = position.coords.latitude;
        document.getElementById('longitude').textContent = position.coords.longitude;
        // console.log(position.coords);
    });
} else {
    console.log('Geolocalização não está disponivel')
}