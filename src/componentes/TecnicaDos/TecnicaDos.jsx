import React from 'react'

//2)En linea con los fragment
//La usamos cuando deseamos rederizar un elemento condicional en funcion de una expresion boleeana

const TecnicaDos = ({booleano}) => {


  return (
    <>
        {booleano && <h2>Usuario Autorizado</h2> }
        {!booleano && <h2>Usuario NO AUTORIZADO</h2> }
    </>
  )
}

export default TecnicaDos