const data = {
  messageEmail: 'Para melhor atendê-lo, digite abaixo o seu nome:',
}

const dwc_window = document.getElementById('dwc_window'),
    dwc_trigger = document.getElementById('dwc_trigger'),
    dwc_trigger_icon = document.getElementById('dwc_trigger_icon'),
    dwc_window_close = document.getElementById('dwc_window_close'),
    dwc_badge = document.getElementById('dwc_badge'),
    dwc_chat = document.querySelector('.dwc__chat');

let dwc_instance = 1;

dwc_trigger.addEventListener('click', open);
dwc_window_close.addEventListener('click', close);