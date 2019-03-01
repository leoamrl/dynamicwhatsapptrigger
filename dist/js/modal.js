$('.gallery__item').click(function(){
  $('#modal-gallery').addClass("active")
});
$('.deployments__title').click(function(){
  $('#modal-deployments').addClass("active")
});
$('.modal__close').click(function(){
  $('#modal-gallery').removeClass("active")
  $('#modal-deployments').removeClass("active")
});
$('.modal__background').click(function(){
  $('#modal-gallery').removeClass("active")
  $('#modal-deployments').removeClass("active")
});

$('.popup__close').click(function(){
  $('#feedback_form').removeClass("active")
  $('.popup__image').replaceWith('<div class="popup__image"></div>')
  $('.popup__text').replaceWith('<div class="popup__text"></div>')
});
$('.popup__background').click(function(){
  $('#feedback_form').removeClass("active")
  $('.popup__image').replaceWith('<div class="popup__image"></div>')
  $('.popup__text').replaceWith('<div class="popup__text"></div>')
});