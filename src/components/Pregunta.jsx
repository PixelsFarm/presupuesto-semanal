import React, { Fragment } from 'react';

const Pregunta = () => {
    return (
        <Fragment>
            <h2>Indica tu presupuesto</h2>
            <form>
                <input 
                    type="nomber"
                    className="u-full-width"
                    placeholder="Indica tu presupuesto"
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