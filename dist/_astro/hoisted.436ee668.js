import"./hoisted.e1dd6401.js";function a(){const t=document.querySelectorAll(".cart-item").length,s=document.getElementById("alert-message"),e=document.querySelector('a[href="/cart-step-2/"]');t===0?(s.classList.remove("d-none"),e.classList.add("disabled"),e.setAttribute("disabled","disabled")):(s.classList.add("d-none"),e.classList.remove("disabled"),e.removeAttribute("disabled"))}const d=document.querySelector('a[href="/cart-step-2/"]');d&&d.addEventListener("click",function(t){a(),document.getElementById("alert-message").classList.contains("d-none")||t.preventDefault()});const n=document.querySelectorAll(".add-quantity");n&&n.forEach(t=>{t.addEventListener("click",function(){document.getElementById("alert-message").classList.add("d-none");const e=document.querySelector('a[href="/cart-step-2/"]');e.classList.remove("disabled"),e.removeAttribute("disabled")})});
