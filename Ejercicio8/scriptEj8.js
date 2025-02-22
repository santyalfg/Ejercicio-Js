function calcularSumatoria() {
    let suma = 0;
    let serie = "";

    for (let i = 3; i <= 53; i += 5) {
        suma += i;
        serie += i + (i < 53 ? " + " : ""); 
    }

    document.getElementById("resultado").innerText = `Serie: ${serie} = ${suma}`;
}
