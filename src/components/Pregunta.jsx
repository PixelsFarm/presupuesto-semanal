import React, { Fragment, useState } from 'react';
import Error from "./Error";


const Pregunta = ({ guardarPresupuesto, guardarRestante }) => { // * pasamos info a dos métodos creados en app.js

    //! State cantidad presupuesto
    //* como es una cantidad la iniciamos en 0
    const [cantidad, guardarCantidad] = useState(0)

    //! State error
    const [error, guardarError] = useState(false)

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

        //* Validar ko o ok
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        //* ok
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad)
    }

    return (
        <Fragment>
            <h2>Indica tu presupuesto</h2>
            
            { 
                //* pasamos variable con mensaje customizado para cada caso al componente error
                error ? <Error mensaje="Los datos introducidos del presupuesto no son válidos" /> : null 
            }

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