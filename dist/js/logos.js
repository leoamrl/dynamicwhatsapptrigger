var logos   = document.getElementsByClassName('footer__logo'),
    popup = document.getElementsByClassName('footer__popup');

function logo(e, logo) {
    var i;
    for (i = 0; i < logos.length; i++) {
        popup[i].classList.remove('active');
    }
    document.getElementById(logo).classList.add('active')
    e.currentTarget.classList.add('active');
}
function close_popup() {
    var i;
    for (i = 0; i < logos.length; i++) {
        popup[i].classList.remove('active');
    }
}
