import"./hoisted.e1dd6401.js";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("passwordInput"),a=document.getElementById("registratiButton"),c=document.getElementById("passwordAlert");t.addEventListener("input",function(){const e=t.value;e.length>=8?(document.getElementById("check-caratteri").classList.remove("text-black-50"),document.getElementById("check-caratteri").classList.add("text-success")):(document.getElementById("check-caratteri").classList.add("text-black-50"),document.getElementById("check-caratteri").classList.remove("text-success")),/[A-Z]/.test(e)?(document.getElementById("check-maiuscola").classList.remove("text-black-50"),document.getElementById("check-maiuscola").classList.add("text-success")):(document.getElementById("check-maiuscola").classList.add("text-black-50"),document.getElementById("check-maiuscola").classList.remove("text-success")),/[\W_]/.test(e)?(document.getElementById("check-speciale").classList.remove("text-black-50"),document.getElementById("check-speciale").classList.add("text-success")):(document.getElementById("check-speciale").classList.add("text-black-50"),document.getElementById("check-speciale").classList.remove("text-success"))});function n(e){const s=t.value,d=s.length>=8,l=/[A-Z]/.test(s),o=/[\W_]/.test(s);!d||!l||!o?(e.preventDefault(),c.classList.remove("d-none")):c.classList.add("d-none")}a.addEventListener("click",n)});
