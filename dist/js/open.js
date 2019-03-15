function handleOpen() {
  dwc_window.classList.toggle('open');
  dwc_trigger.classList.toggle('open');
  dwc_trigger_icon.classList.toggle('open');
  dwc_badge.classList.add('open');

  if (dwc_instance === 1) {
    setTimeout(handleFirstMessage, 2000)

    dwc_instance++
  }
}