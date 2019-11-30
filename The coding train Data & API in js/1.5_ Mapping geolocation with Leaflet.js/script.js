const mymap = L.map('issMap').setView([0, 0], 1);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

const issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
});

const marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.latitude);
    console.log(data.longitude);

    const {
        latitude,
        longitude
    } = data;

    marker.setLatLng([latitude, longitude])

    document.getElementById('spanLat').textContent = latitude
    document.getElementById('spanLon').textContent = longitude
}

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

getData();