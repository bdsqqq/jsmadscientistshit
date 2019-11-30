const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

const mymap = L.map('issMap').setView([0, 0], 1);


const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

const issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);


let firstTime = true;

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.latitude);
    console.log(data.longitude);

    const {
        latitude,
        longitude
    } = data;

    marker.setLatLng([latitude, longitude]);
    if(firstTime){
        mymap.setView([latitude, longitude], 3);
        firstTime = false
    }

    document.getElementById('spanLat').textContent = latitude.toFixed(2);
    document.getElementById('spanLon').textContent = longitude.toFixed(2);
}

getData();

setInterval(getData, 1000);