var url = 'https://github.com/EverSilverio';
var apiChart = 'https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=';
var qrcodeUrl = apiChart + url;


function loadQrCode() {
    let qrcode = document.querySelector('#qrcode');
    let inputUrl = document.querySelector('#url');

    url = inputUrl.value;
    qrcodeUrl = apiChart + url;

    console.log(qrcodeUrl);
    qrcode.setAttribute('src', qrcodeUrl);
}

window.onload = function() {
    let qrcode = document.querySelector('#qrcode');
    let inputUrl = document.querySelector('#url');

    qrcode.setAttribute('src', qrcodeUrl)
        
    inputUrl.onchange = function(e) {
        url = e.target.value;
    }
}
