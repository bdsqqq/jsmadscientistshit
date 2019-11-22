async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data.latitude);
    console.log(data.longitude);

    const {latitude, longitude} = data;

    document.getElementById('spanLat').textContent = latitude
    document.getElementById('spanLon').textContent = longitude
}

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544'

getData();