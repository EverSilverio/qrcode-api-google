var url = 'https://github.com/EverSilverio';
var apiChart = 'https://chart.googleapis.com/chart?chs=350x350&cht=qr&choe=UTF-8&chl=';
var qrcodeUrl = apiChart + url;


function loadQrCode() {
    let qrcode = document.querySelector('#qrcode');
    let inputUrl = document.querySelector('#url');

    qrcode.setAttribute('src', './img/loading.gif');

    url = inputUrl.value;

    // replace & por %26 -  API nao entende "&"
    url = url.replace('&', '%26');

    qrcodeUrl = apiChart + url;

    setTimeout(() => {
        qrcode.setAttribute('src', qrcodeUrl);    
    }, 10);
}

window.onload = function() {
    let qrcode = document.querySelector('#qrcode');
    let inputUrl = document.querySelector('#url');

    inputUrl.value = url;
    qrcode.setAttribute('src', qrcodeUrl)
        
    inputUrl.onchange = function(e) {
        url = e.target.value;
    }
}
