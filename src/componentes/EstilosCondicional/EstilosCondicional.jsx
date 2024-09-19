import React from 'react'
import './EstilosCondicional.css'

//Podemos usar los estilos condicionales en linea y tambien los podemos usar con clases

const EstilosCondicional = ({booleano, clase}) => {
  return (
    
    <div>
        <h4 style={{color: booleano ? "red" : "green"}}>Estilos Consicionales en linea</h4>
        <h4 className={booleano ? "amarillo" : "azul"}>Trabajando con Clases</h4>
        <h4 className={booleano && "azul"}>Ejemplo usando el operador &&</h4>
        <h4 className={clase}>Recibo una clase props</h4>
    </div>
  )
}

export default EstilosCondicional