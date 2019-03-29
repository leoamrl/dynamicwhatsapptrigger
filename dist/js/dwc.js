const data = {
  company: 'Pagu Propaganda',
  broker: 'Leo Amaral',
  messageEmail: 'Primeiro, me informe seu nome abaixo:',
  messagePhone: 'Agora digite o seu número de telefone:',
  messageMail: 'Para finalizar, o seu e-mail:',
}

const dataForm = {
  name: '',
  phone: '',
  email: ''
}

const dwc_window = document.getElementById('dwc_window'),
    dwc_trigger = document.getElementById('dwc_trigger'),
    dwc_trigger_icon = document.getElementById('dwc_trigger_icon'),
    dwc_window_close = document.getElementById('dwc_window_close'),
    dwc_badge = document.getElementById('dwc_badge'),
    dwc_chat = document.querySelector('.dwc__chat'),
    dwc_name = document.querySelector('h1.dwc__name'),
    dwc_nameCompany = document.querySelector('span.dwc__name-company'),
    dwc_nextPhone = document.querySelector('.dwc__button--next-phone'),
    dwc_nextMail = document.querySelector('.dwc__button--next-mail');

let dwc_instance = 1;

dwc_name.innerHTML = data.broker;
dwc_nameCompany.innerHTML = data.company;
dwc_trigger.addEventListener('click', handleOpen);
dwc_window_close.addEventListener('click', handleClose);
dwc_nextPhone.addEventListener('click', handleNextPhone);
dwc_nextMail.addEventListener('click', handleNextMail);

Array.from(document.querySelectorAll('.dwc__chat')).forEach(el => new SimpleBar);