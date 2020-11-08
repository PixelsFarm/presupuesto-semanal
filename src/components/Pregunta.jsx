import React, { Fragment, useState } from 'react';

const Pregunta = () => {

    //! Definir state cantidad presupuesto
    //* como es una cantidad la iniciamos en 0
    const [cantidad, guardarCantidad] = useState(0)

    //! Función que lee presupuesto
    //* En el input los datos son pasados como strings, tenemos que pasarlos a números
    //* Esto lo podemos saber porque en la consola los strings son en negro y los números en azul
    const definirPresupuesto = e => {
        //console.log(parseInt(e.target.value))
        //* 10 lo pasa a número decimal
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //! Submit para definir presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault()

        //? Validar ko o ok

        //? ok
    }

    return (
        <Fragment>
            <h2>Indica tu presupuesto</h2>
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Indica tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}
 
export default Pregunta;