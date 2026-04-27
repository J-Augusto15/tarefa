function irPagina() {
    document.getElementById("tela1").style.display = "none";
    document.getElementById("tela2").style.display = "block";
}

function voltar() {
    document.getElementById("tela1").style.display = "block";
    document.getElementById("tela2").style.display = "none";
}

function irDia(pagina) {
    window.location.href = pagina;
}

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.get("tela") === "2") {
        irPagina();
    }
}