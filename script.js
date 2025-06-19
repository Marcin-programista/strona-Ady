function powitanie() {
    alert("Dziękuję za kliknięcie! Miłego dnia 😊");
}

function pokazZakladke(id) {
    const zakladki = document.querySelectorAll(".tab");
    zakladki.forEach(tab => tab.style.display = "none");

    document.getElementById(id).style.display = "block";
}
