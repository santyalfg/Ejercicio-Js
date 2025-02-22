function calculateAverage() {
    let total = 0;
    let numberOfGrades = 4;

    for (let i = 1; i <= numberOfGrades; i++) {
        let grade = parseFloat(prompt(`Ingrese la nota ${i} (entre 1 y 5):`));

        while (isNaN(grade) || grade < 1 || grade > 5) {
            grade = parseFloat(prompt(`Entrada inválida. Ingrese la nota ${i} (entre 1 y 5):`));
        }

        total += grade;
    }

    let average = total / numberOfGrades;
    alert(`El promedio de las notas es: ${average.toFixed(2)}`);
}

