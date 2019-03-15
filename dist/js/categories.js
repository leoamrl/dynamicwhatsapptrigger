var title   = document.getElementsByClassName('map__category'),
    content = document.getElementsByClassName('map__description');

function tab(e, tab) {
    var i;
    for (i = 0; i < title.length; i++) {
        content[i].classList.remove('active');
        title[i].classList.remove('active');
    }
    document.getElementById(tab).classList.add('active')
    e.currentTarget.classList.add('active');
}
