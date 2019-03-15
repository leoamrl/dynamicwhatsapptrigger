function handleFirstMessage() {
  const typing = document.createElement('div')
  
  typing.className = 'dwc__message dwc__message--received dwc__message--typing';
  typing.title = 'Corretor está digitando...';
  typing.innerHTML = '<span></span><span></span><span></span>';
  dwc_chat.appendChild(typing)
  return setTimeout(createReceivedMessage(data.messageEmail), 3000)
}

function createReceivedMessage(message) {
  const typing = document.querySelector('.dwc__message--typing.dwc__message--received');  typing.classList.add('dwc__hidden')
  const messageEmail = document.createElement('div'),
        messageAttendance = document.createElement('div');
  
  messageAttendance.className = 'dwc__message dwc__message--received';
  messageAttendance.innerHTML = 'Vou te ajudar com um rápido atendimento automático.';
  dwc_chat.appendChild(messageAttendance)
  messageEmail.className = 'dwc__message dwc__message--received';
  messageEmail.innerHTML = message
  dwc_chat.appendChild(messageEmail)
  setTimeout(function() {
    const fieldName = document.querySelector('.dwc__input.dwc__input--name'),
          buttonNext = document.querySelector('.dwc__button.dwc__button--next-phone');

    fieldName.classList.remove('dwc__hidden')
    buttonNext.classList.remove('dwc__hidden')
  }, 1000)
}

function secondMessage(message) {
  const messagePhone = document.createElement('div')

  messagePhone.className = 'dwc__message dwc__message--received'
  messagePhone.innerHTML = message
  setTimeout(() => {
    dwc_chat.appendChild(messagePhone)

    const fieldPhone = document.querySelector('.dwc__input.dwc__input--phone'),
          buttonNext = document.querySelector('.dwc__button.dwc__button--next-mail');

    fieldPhone.classList.remove('dwc__hidden')
    buttonNext.classList.remove('dwc__hidden')
  }, 2000)
}

function thirdMessage(message) {
  const messageMail = document.createElement('div')

  messageMail.className = 'dwc__message dwc__message--received'
  messageMail.innerHTML = message
  setTimeout(() => {
    dwc_chat.appendChild(messageMail)

    const fieldMail = document.querySelector('.dwc__input.dwc__input--mail'),
          buttonSend = document.querySelector('.dwc__button.dwc__button--send');

    fieldMail.classList.remove('dwc__hidden')
    buttonSend.classList.remove('dwc__hidden')
  }, 2000)
}