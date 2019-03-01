var trigger   = document.getElementsByClassName('lightbox-trigger'),
    project = document.getElementsByClassName('project');

function lightbox(e) {
  var i;
  for (i = 0; i < trigger.length; i++) {
    var imagem = trigger[i].dataset.image;
    var id = trigger[i].dataset.id;
    console.log(imagem)
    console.log(id)
  }
  // document.getElementById(lightbox).classList.add('active')
  // e.currentTarget.classList.add('active');
}
