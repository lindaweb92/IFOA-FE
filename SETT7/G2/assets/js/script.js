document.addEventListener('DOMContentLoaded', function () {
    // Mostra il valore precedentemente salvato se presente
    showSavedName();

    // Avvia il contatore
    startCounter();
});

function saveName() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name !== '') {
        localStorage.setItem('savedName', name);
        showSavedName();
    }
}

function removeName() {
    localStorage.removeItem('savedName');
    showSavedName();
}

function showSavedName() {
    const savedNameDiv = document.getElementById('savedName');
    const savedName = localStorage.getItem('savedName');

    if (savedName) {
        savedNameDiv.innerText = `Nome precedentemente salvato: ${savedName}`;
    } else {
        savedNameDiv.innerText = '';
    }
}

function startCounter() {
    let seconds = 0;

    function updateCounter() {
        document.getElementById('counter').innerText = `Tempo trascorso: ${seconds} secondi`;
        seconds++;
        sessionStorage.setItem('counterValue', seconds);
    }

    // Carica il valore del contatore se presente
    const storedCounter = sessionStorage.getItem('counterValue');
    if (storedCounter) {
        seconds = parseInt(storedCounter);
    }

    // Aggiorna il contatore ogni secondo
    setInterval(updateCounter, 1000);
    
}