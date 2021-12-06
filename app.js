var url = 'https://github.com/EverSilverio';
var apiChart = 'https://chart.googleapis.com/chart?chs=350x350&cht=qr&choe=UTF-8&chl=';
var qrcodeUrl = apiChart + url;


function loadQrCode() {
    let qrcode = document.querySelector('#qrcode');
    let inputUrl = document.querySelector('#url');
    let urlQrCode = document.querySelector('#urlQrCode');

    url = inputUrl.value;
    urlQrCode.innerHTML = url;

    url = url.replace('&', '%26');
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
