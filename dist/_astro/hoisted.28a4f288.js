import"./hoisted.e1dd6401.js";document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("aggiungi-testata");let a=2;t.addEventListener("click",function(){document.querySelectorAll(".accordion-collapse.show").forEach(e=>{e.classList.remove("show")});const o=`
      <div class="accordion accordion-flush mt-4" id="testata-${a}">
        <div class="accordion-item bg-light">
          <h2 class="accordion-header" id="heading${a}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${a}" aria-expanded="true" aria-controls="collapse${a}">
              Dati testata giornalistica
            </button>
          </h2>
          <div id="collapse${a}" class="accordion-collapse collapse show" aria-labelledby="heading${a}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <form id="testata-${a}">
                <div class="mb-3">
                  <label for="azienda" class="form-label">Nome della testata*</label>
                  <input type="text" class="form-control" id="nome-testata">
                </div>
                <div class="mb-3">
                  <label for="azienda" class="form-label">Città*</label>
                  <input type="text" class="form-control" id="città-testata">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      `;t.insertAdjacentHTML("beforebegin",o),a++})});
