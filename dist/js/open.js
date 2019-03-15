function open() {
  dwc_window.classList.toggle('open');
  dwc_trigger.classList.toggle('open');
  dwc_trigger_icon.classList.toggle('open');
  dwc_badge.classList.add('open');

  if (dwc_instance === 1) {
    setTimeout(function() {
      const typing = document.createElement('div')
      typing.className = 'dwc__message dwc__message--received dwc__message--typing';
      typing.title = 'Corretor está digitando...'
      typing.innerHTML = '<span></span><span></span><span></span>'
      dwc_chat.appendChild(typing)
    }, 2000)
    setTimeout(function() {
      const typing = document.querySelector('.dwc__message--typing')
      typing.innerHTML = ''
    }, 5000)
    setTimeout(function() {
      const messageEmail = document.createElement('div')
      messageEmail.className = 'dwc__message dwc__message--received';
      messageEmail.innerHTML = data.messageEmail
      dwc_chat.appendChild(messageEmail)
      setTimeout(function() {
        const fieldName = document.createElement('input'),
              buttonNext = document.createElement('button'),
              form = document.querySelector('.dwc__form');

        fieldName.className = 'dwc__input dwc__input--name'
        fieldName.placeholder = 'Digite seu nome...'
        fieldName.type = 'text'
        buttonNext.className = 'dwc__button dwc__button--next'
        buttonNext.id = 'dwc_next'
        buttonNext.type = 'button'
        form.prepend(fieldName, buttonNext)
        const dwc_input = document.querySelector('.dwc__input')
        console.log(dwc_input)
        dwc_input.addEventListener('focus', handleFocus, true);
        dwc_input.addEventListener('blur', handleBlur, true);
      }, 1000)
    }, 5000);

    dwc_instance++
  }
}