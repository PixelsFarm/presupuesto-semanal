//* utilizamos const para indicar que haremos multiples exports
//* si pones default es una por default
export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if ((presupuesto / 4 > restante)) clase = 'alert alert-danger'; //* queda 25%
    else if ((presupuesto / 2) > restante) clase = 'alert alert-warning'; //* queda 50%
    else clase = 'alert alert-success';

    return clase;
}