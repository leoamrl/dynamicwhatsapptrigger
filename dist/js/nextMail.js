function handleNextMail() {
  const inputPhone = document.querySelector('.dwc__input--phone'),
        message = document.createElement('div');

  if(inputPhone.value) {
    message.className = 'dwc__message dwc__message--sent';
    message.innerHTML = inputPhone.value;
    dwc_chat.appendChild(message)
    dataForm.name = inputPhone.value;
    inputPhone.value = ''

    const fieldPhone = document.querySelector('.dwc__input.dwc__input--phone'),
          buttonNext = document.querySelector('.dwc__button.dwc__button--next-mail');

    fieldPhone.classList.add('dwc__hidden')
    buttonNext.classList.add('dwc__hidden')
    
    return thirdMessage(data.messageMail)
  }
}