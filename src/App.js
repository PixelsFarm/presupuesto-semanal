import React, { useState } from 'react';
import Pregunta from './components/Pregunta'

function App() {

    //! state general presupuesto
    //* pasamos al general los dos states pq los necesitamos globales para utilizar en diferentes componetes
    const [presupuesto, guardarPresupuesto] = useState(0)

    //! state restante presupuesto
    const [restante, guardarRestante] = useState(0)

    return (
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>
                <div className="contenido-principal contenido">
                    <Pregunta
                        guardarPresupuesto={guardarPresupuesto}
                        guardarRestante={guardarRestante}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
