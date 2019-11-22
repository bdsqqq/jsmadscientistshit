console.log('about to fetch italy');
fetch('italy.jpg').then(response => {
    console.log(response);
    return response.blob();
}).then(blob => {
    console.log(blob);
    document.getElementById('italy').src = URL.createObjectURL(blob);
});