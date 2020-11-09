import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {

    //! state general presupuesto
    //* pasamos al general los dos states pq los necesitamos globales para utilizar en diferentes componetes
    const [presupuesto, guardarPresupuesto] = useState(0)

    //! state restante presupuesto
    const [restante, guardarRestante] = useState(0)

    //! state carga condicional componentes
    const [mostrarpregunta, actualizarPregunta] = useState(true)

    //! state gastos
    const [gastos, guardarGastos] = useState([])

    //! funcion cada vez agreguemos nuevo gasto
    const agregarNuevoGasto = gasto => {
        guardarGastos([
            ...gastos,
            gasto
        ])
    }

    return (
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>
                <div className="contenido-principal contenido">
                    { mostrarpregunta 
                        ?
                            <Pregunta
                                guardarPresupuesto={guardarPresupuesto}
                                guardarRestante={guardarRestante}
                                actualizarPregunta={actualizarPregunta}
                            />
                        :
                            <div className="row">
                                <div className="one-half column">
                                    <Formulario
                                        agregarNuevoGasto={agregarNuevoGasto}   
                                    />
                                </div>
                                <div className="one-half column">
                                    2
                                </div>
                            </div>
                    }
                </div>
            </header>
        </div>
    );
}

export default App;
