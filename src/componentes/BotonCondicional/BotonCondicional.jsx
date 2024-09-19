import React, { useState } from 'react'


//Ejercicio de renderizado condicional aplicando un Login



const BotonCondicional = () => {
    const [verificado, setVerificado] = useState(false)

    //Creo los estados para el usuario y contraseña
    const [usuario, setUsuario] = useState("")
    const [pass, setPass] = useState("")

    //Funcion

    const habilitarUsusario =(e) => {
        e.preventDefault();

        //implemento una logica de validacion
        if(usuario === "Milton" && pass === "Ascona") {
            setVerificado(true)
        } else {
            setUsuario("Vete maldito impostor!")
            setPass("rata de dos patas")
        }
    }

  return (
    <>
        {
            verificado ? ( <button onClick={()=> setVerificado(false)}> Cerrar Sesión </button> ) : 
            ( 
                <form onSubmit={habilitarUsusario}>
                    <label htmlFor="">Usuario</label>
                    <input type="text" onChange={(e) => setUsuario(e.target.value)} value={usuario} />
                    <br />
                    <br />
                    <label htmlFor="">Contraseña</label>
                    <input type="text"  onChange={(e) => setPass(e.target.value)} value={pass}/>
                    <br />
                    <br />
                    <button type='submit'>Iniciar Sesion</button>
                </form>
            )

        }
    
    </>
  )
}

export default BotonCondicional