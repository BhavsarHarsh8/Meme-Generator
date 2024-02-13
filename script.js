let url = "https://meme-api.com/gimme";
let btn = document.querySelector('#getApi');
let msg = document.querySelector('#printContent');

btn.addEventListener('click', async () => {
    let response = await fetch(url);
    let data = await response.json();
    let img = document.querySelector('img');
    img.src = data.preview[0];
});