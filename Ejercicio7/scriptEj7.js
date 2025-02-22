function verificarGrosor() {
    let diametro = parseFloat(document.getElementById("diametro").value);
    let grosor = parseFloat(document.getElementById("grosor").value);
    let mensaje = "El grosor es adecuado";

    if ((diametro >= 1.4 && grosor < 0.4) || (diametro > 0.8 && diametro <= 1.4 && grosor < 0.25)) {
        mensaje = "El grosor para esta rueda es inferior al recomendado";
    }

    document.getElementById("resultado").innerText = mensaje;
}

