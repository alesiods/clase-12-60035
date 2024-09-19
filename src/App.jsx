import React from 'react'
import TecnicaUno from './componentes/TecnicaUno/TecnicaUno'
import TecnicaDos from './componentes/TecnicaDos/TecnicaDos'
import TecnicaTres from './componentes/TecnicaTres/TecnicaTres'
import EstilosCondicional from './componentes/EstilosCondicional/EstilosCondicional'
import BotonCondicional from './componentes/BotonCondicional/BotonCondicional'

const App = () => {

  return (
    <div>
      {/* <TecnicaUno nombre={"Estefania"}/>
      <TecnicaDos booleano={false}/>
      <TecnicaTres booleano/>
      <EstilosCondicional booleano={false} clase="claseNueva"/> */}
      <BotonCondicional/>
    </div>
  )
}

export default App