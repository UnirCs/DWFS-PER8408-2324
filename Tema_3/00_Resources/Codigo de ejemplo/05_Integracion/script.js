function showAreaFormula(sides) {
    let formula = '';

    switch (sides) {
        case 3:
            formula = 'Área = (base * altura) / 2';
            break;
        case 4:
            formula = 'Área = lado²';
            break;
        case 5:
            formula = 'Área = (perímetro * apotema) / 2';
            break;
        case 6:
            formula = 'Área = (3 * lado² * √3) / 2';
            break;
        case 7:
            // Fórmula generalizada o aproximada, ya que no hay una fórmula sencilla para un heptágono regular
            formula = 'Área = (7 * apotema * lado) / 2';
            break;
        default:
            formula = 'Polígono no definido';
    }

    console.log(formula);
}
