function carregar() {
    const horaAtual = document.getElementById("hora-atual");
    const img = document.getElementById("imagem");
    const data = new Date();
    var hora = data.getHours();
    horaAtual.innerHTML = hora;

    if (hora >= 0 && hora < 12) {
        img.src = "img/manha.jpg";
        document.body.classList.add("bg-day");
    } else if (hora >= 12 && hora < 18) {
        img.src = "img/tarde.jpg";
        document.body.classList.add("bg-late");
    } else {
        img.src = "img/noite.jpg";
        document.body.classList.add("bg-night");
    }
}