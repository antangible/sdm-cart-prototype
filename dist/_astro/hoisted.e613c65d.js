import"./hoisted.e1dd6401.js";function r(){const t=document.querySelectorAll(".cart-item").length,s=document.getElementById("alert-message"),e=document.querySelector('a[href="/register-integrata-4/"]');t===0?(s.classList.remove("d-none"),e.classList.add("disabled"),e.setAttribute("disabled","disabled")):(s.classList.add("d-none"),e.classList.remove("disabled"),e.removeAttribute("disabled"))}const n=document.querySelector('a[href="/register-integrata-4/"]');n&&n.addEventListener("click",function(t){r(),document.getElementById("alert-message").classList.contains("d-none")||t.preventDefault()});const a=document.querySelectorAll(".add-quantity");a&&a.forEach(t=>{t.addEventListener("click",function(){document.getElementById("alert-message").classList.add("d-none");const e=document.querySelector('a[href="/register-integrata-4/"]');e.classList.remove("disabled"),e.removeAttribute("disabled")})});