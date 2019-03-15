function handleNextPhone() {
  const inputName = document.querySelector('.dwc__input--name'),
        message = document.createElement('div');

  if(inputName.value) {
    message.className = 'dwc__message dwc__message--sent';
    message.innerHTML = inputName.value;
    dwc_chat.appendChild(message)
    dataForm.name = inputName.value;
    inputName.value = ''

    const fieldName = document.querySelector('.dwc__input.dwc__input--name'),
          buttonNext = document.querySelector('.dwc__button.dwc__button--next-phone');

    fieldName.classList.add('dwc__hidden')
    buttonNext.classList.add('dwc__hidden')

    return secondMessage(data.messagePhone)
  }
}