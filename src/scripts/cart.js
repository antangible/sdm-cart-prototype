// Funzione per inizializzare il carrello
function initializeCart() {
  const products = document.querySelectorAll('.product');
  const cart = JSON.parse(localStorage.getItem('cart')) || {};

  products.forEach(product => {
    const productName = product.getAttribute('data-product');
    const category = product.getAttribute('data-category');
    const quantitySpan = product.querySelector('.product-quantity');
    const removeButton = product.querySelector('.remove-quantity');
    const productPrice = parseFloat(product.querySelector('.product-price').textContent);

    // Verifica se è presente una quantità memorizzata in localStorage
    if (cart[productName]) {
      quantitySpan.textContent = cart[productName].quantity;

      // Controlla se la quantità è 0 e disabilita il pulsante "remove-quantity" di conseguenza
      if (cart[productName].quantity === 0) {
        removeButton.disabled = true;
      }
    } else {
      // Inizializza il carrello con il prezzo del prodotto
      cart[productName] = {
        price: productPrice,
        quantity: 0,
        category: category
      };
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Aggiungi event listener per aumentare la quantità
    product.querySelector('.add-quantity').addEventListener('click', () => {
      let quantity = parseInt(quantitySpan.textContent);
      quantity++;
      quantitySpan.textContent = quantity;

      // Abilita il pulsante "remove-quantity"
      removeButton.disabled = false;

      // Aggiorna la quantità nel carrello
      cart[productName].quantity = quantity;

      // Salva il carrello in localStorage
      localStorage.setItem('cart', JSON.stringify(cart));

      // Aggiorna il carrello
      updateCart();
    });

    // Aggiungi event listener per diminuire la quantità
    product.querySelector('.remove-quantity').addEventListener('click', () => {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;

        // Disabilita il pulsante "remove-quantity" se la quantità è 0
        if (quantity === 0) {
          removeButton.disabled = true;
        }

        // Aggiorna la quantità nel carrello
        cart[productName].quantity = quantity;

        // Salva il carrello in localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Aggiorna il carrello
        updateCart();
      }
    });
  });

  // Aggiorna il carrello una volta all'avvio
  updateCart();
}

// Funzione per aggiornare il carrello e "cart-items"
function updateCart() {
  const cartList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  let total = 0;
  let totalItems = 0;  // Inizializza la variabile per la somma totale degli articoli

  // Cancella il contenuto di "cart-items"
  cartList.innerHTML = '';

  // Popola "cart-items", calcola il totale del carrello e rimuovi elementi con quantità 0
  for (const productName in cart) {
    const item = cart[productName];
    total += item.price * item.quantity;
    totalItems += item.quantity;  // Incrementa la variabile con la quantità di ogni prodotto

    if (item.quantity > 0) {
        const listItem = document.createElement('li');
        listItem.className = 'cart-item';

        // Calcola il totale per questo prodotto
        const itemTotal = item.price * item.quantity;

        // Se "category" esiste, lo include nel markup, altrimenti no
        const categoryMarkup = item.category ? `<span class="category-name">${item.category}</span>` : '';

        // Usa innerHTML per aggiungere il markup desiderato, incluso la categoria (se esiste)
        listItem.innerHTML = `
            <div>${categoryMarkup}</div>
            <div class="product-name mt-1">${productName}</div>
            <div class="d-flex justify-content-between mt-1">
              <span class="quantity">${item.quantity}x</span>
              <span class="item-total">${itemTotal.toFixed(2)}€</span>
            </div>
        `;

        cartList.appendChild(listItem);
    }
  }
  
  const totalItemsDisplay = document.getElementById('total-items'); // Seleziona l'elemento che mostra la somma totale degli articoli
  totalItemsDisplay.textContent = `${totalItems} articoli`; // Aggiorna l'elemento con il nuovo valore

  // Aggiorna il totale del carrello
  cartTotal.textContent = `${total.toFixed(2)}`;

  // Salva il carrello aggiornato in localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Inizializza il carrello
initializeCart();
