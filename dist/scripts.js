function close(){dwc_window.classList.remove("open"),dwc_trigger.classList.remove("open"),dwc_trigger_icon.classList.remove("open")}function handleFocus(){document.querySelector(".dwc__message--sent.dwc__message--typing").classList.add("open")}function handleBlur(){document.querySelector(".dwc__message--sent.dwc__message--typing").classList.remove("open")}const data={messageEmail:"Para melhor atendê-lo, digite abaixo o seu nome:"},dwc_window=document.getElementById("dwc_window"),dwc_trigger=document.getElementById("dwc_trigger"),dwc_trigger_icon=document.getElementById("dwc_trigger_icon"),dwc_window_close=document.getElementById("dwc_window_close"),dwc_badge=document.getElementById("dwc_badge"),dwc_chat=document.querySelector(".dwc__chat");let dwc_instance=1;function open(){dwc_window.classList.toggle("open"),dwc_trigger.classList.toggle("open"),dwc_trigger_icon.classList.toggle("open"),dwc_badge.classList.add("open"),1===dwc_instance&&(setTimeout(function(){const e=document.createElement("div");e.className="dwc__message dwc__message--received dwc__message--typing",e.title="Corretor está digitando...",e.innerHTML="<span></span><span></span><span></span>",dwc_chat.appendChild(e)},2e3),setTimeout(function(){document.querySelector(".dwc__message--typing").innerHTML=""},5e3),setTimeout(function(){const e=document.createElement("div");e.className="dwc__message dwc__message--received",e.innerHTML=data.messageEmail,dwc_chat.appendChild(e),setTimeout(function(){const e=document.createElement("input"),t=document.createElement("button"),n=document.querySelector(".dwc__form");e.className="dwc__input dwc__input--name",e.placeholder="Digite seu nome...",e.type="text",t.className="dwc__button dwc__button--next",t.id="dwc_next",t.type="button",n.prepend(e,t);const c=document.querySelector(".dwc__input");console.log(c),c.addEventListener("focus",handleFocus,!0),c.addEventListener("blur",handleBlur,!0)},1e3)},5e3),dwc_instance++)}dwc_trigger.addEventListener("click",open),dwc_window_close.addEventListener("click",close);