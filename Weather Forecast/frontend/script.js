async function getData(){
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data)
}

getData();