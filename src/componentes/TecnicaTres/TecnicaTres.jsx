import React from 'react'

//3) Operador Ternario:


const TecnicaTres = ({booleano}) => {
  return (
    <div>
        {
            booleano ? <h3>Acceso Permitido</h3> : <h3>Acceso denegado! Vete maldito impostor</h3>
        }
    </div>
  )
}

export default TecnicaTres