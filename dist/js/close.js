function close() {
  dwc_window.classList.remove('open');
  dwc_trigger.classList.remove('open');
  dwc_trigger_icon.classList.remove('open');
}
function handleFocus() {
  const clientTyping = document.querySelector('.dwc__message--sent.dwc__message--typing')
  clientTyping.classList.add('open')
}
function handleBlur() {
  const clientTyping = document.querySelector('.dwc__message--sent.dwc__message--typing')
  clientTyping.classList.remove('open')
}