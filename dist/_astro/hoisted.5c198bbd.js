import"./hoisted.e1dd6401.js";const c=document.querySelectorAll(".btn-check");c.forEach(n=>{n.addEventListener("change",function(){const t=document.querySelectorAll(".btn-check:checked"),e=document.getElementById("message");t.length>1?(e.innerHTML="Puoi selezionare al massimo 1 data.",e.classList.remove("d-none"),e.classList.add("alert","alert-warning"),e.setAttribute("role","alert"),this.checked=!1):(e.innerHTML="",e.classList.add("d-none"),e.classList.remove("alert","alert-warning"),e.removeAttribute("role"))})});const s=document.querySelector(".cta-cart-proceed");s.addEventListener("click",function(n){if(document.querySelectorAll(".btn-check:checked").length!==1){n.preventDefault();const e=document.getElementById("message");e.innerHTML="Attenzione, non hai selezionato la data del tuo biglietto.",e.classList.remove("d-none"),e.classList.add("alert","alert-warning"),e.setAttribute("role","alert"),document.querySelector(".select-date").classList.add("bg-warning","bg-gradient","bg-opacity-25")}});document.addEventListener("DOMContentLoaded",function(){var n=document.getElementById("flexSwitchCheckChecked"),t=document.getElementById("dati-operatore");n.addEventListener("change",function(){n.checked?(t.classList.remove("d-none"),t.classList.add("d-block")):(t.classList.remove("d-block"),t.classList.add("d-none"))})});
