import React from 'react'

//1) Return Temprano:
//Esta tecnica la usamos en JS y evitamos colocar el ELSE

//funcion booleana que me dice si es fin de semana

function esFinde(dia) {
    if(dia ==="sabado" || dia === "domingo") {
        return true
    } else {
        return false
    }
}

// Peeeeeeeeero si aplico el return temprano:

function esFinDeSemana(dia){
    if(dia ==="sabado" || dia === "domingo"){
        return true
    }
    return false
}

//////////////////////////////

//otro ejemplo:

/* function verificarEdad(edad) {
    if(edad >= 18){
        console.log("eres mayor de edad")
    } else {
        console.log("eres menor de edad")
    }
    console.log("Fin de la verificacion")
}


verificarEdad(16) */

//Con retorno temprano

function verificadorEdad(edad) {
    if(edad < 18) {
        console.log("eres menor")
        return
    }
    console.log("eres mayor")
    console.log("fin")
}

verificadorEdad(16)

const TecnicaUno = ({nombre}) => {
    if(nombre === "Alesio") {
        return <h1>Hola Administrador</h1>
    }
  return <h2>Hola {nombre}</h2>
}

export default TecnicaUno