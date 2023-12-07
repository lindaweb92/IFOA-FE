// Funzione per caricare i libri dalla chiamata API
async function loadBooks() {
    const response = await fetch('https://striveschool-api.herokuapp.com/books');
    const books = await response.json();

    const bookList = document.getElementById('bookList');

    books.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('col-md-3', 'mb-4');

        card.innerHTML = `
            <div class="card">
                <img src="${book.img}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Prezzo: ${book.price} €</p>
                    <button class="btn btn-danger" onclick="removeBook(this)">Scarta</button>
                    <button class="btn btn-primary" onclick="addToCart('${book.title}', ${book.price})">Compra ora</button>
                </div>
            </div>
        `;

        bookList.appendChild(card);
    });
}

// Funzione per rimuovere una card
function removeBook(button) {
    const card = button.closest('.card');
    card.remove();
}

// Funzione per aggiungere un libro al carrello
function addToCart(title, price) {
    const cart = document.getElementById('cart');
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerHTML = `${title} - ${price} € <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(this)">Rimuovi</button>`;
    cart.appendChild(listItem);

    // Aggiungi al carrello nello storage del browser
    updateCartStorage();
}

// Funzione per rimuovere un libro dal carrello
function removeFromCart(button) {
    const listItem = button.closest('li');
    listItem.remove();

    // Aggiorna il carrello nello storage del browser
    updateCartStorage();
}

// Funzione per effettuare il checkout
function checkout() {
    alert('Grazie per il tuo acquisto!');
    // Puoi implementare ulteriori azioni qui, come inviare l'ordine a un server, ecc.
}

// Funzione per aggiornare lo storage del carrello
function updateCartStorage() {
    const cart = document.getElementById('cart');
    const cartItems = Array.from(cart.children).map(item => item.textContent.trim());
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

// Carica i libri quando la pagina è pronta
document.addEventListener('DOMContentLoaded', () => {
    loadBooks();

    // Carica il carrello salvato nello storage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        const cart = document.getElementById('cart');
        const cartItems = JSON.parse(savedCart);
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `${item} <button class="btn btn-danger btn-sm float-end" onclick="removeFromCart(this)">Rimuovi</button>`;
            cart.appendChild(listItem);
        });
    }
});