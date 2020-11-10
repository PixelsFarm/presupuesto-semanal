import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

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

    //! state gasto
    const [gasto, guardarGasto] = useState({})

    //! state crear gasto
    const [creargasto, guardarCrearGasto] = useState(false)

    //! funcion cada vez agreguemos nuevo gasto
    //const agregarNuevoGasto = gasto => {
        // guardarGastos([
        //     ...gastos,
        //     gasto
        // ])
    //}

    //! useffect que actualiza el restante
    useEffect(() => {
        //* Sólo guarda si se ha añadido gasto. Previene que al iniciar salga en listado vacío+$
        if (!creargasto) return


        guardarGastos([
            ...gastos,
            gasto
        ])

        //* Resta presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad
        guardarRestante(presupuestoRestante)

        //* resetear a false
        guardarCrearGasto(false)
    }, [gasto, creargasto, gastos, restante]);

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
                                        //agregarNuevoGasto={agregarNuevoGasto}
                                        guardarGasto={guardarGasto}
                                        guardarCrearGasto={guardarCrearGasto}
                                    />
                                </div>
                                <div className="one-half column">
                                    <Listado 
                                        gastos={gastos}
                                    />
                                    <ControlPresupuesto 
                                        presupuesto={presupuesto}
                                        restante={restante}
                                    />
                                </div>
                            </div>
                    }
                </div>
            </header>
        </div>
    );
}

export default App;
