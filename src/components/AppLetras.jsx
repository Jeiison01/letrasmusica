import Formulario from "./Formulario"
import Alerta from "./Alerta"
import Letra from "./Letra"
import useLetras from "../hooks/useLetras"
import Spinner from "./Spinner"


const AppLetras = () => {

    const {alerta, letra, cargando} = useLetras()

  return (
    <>
    <header>Busqueda de Letras de Canciones</header>

    <Formulario/>

    <main>
        {alerta ? <Alerta>{alerta}</Alerta> 
        : letra ? <Letra/> 
        : cargando ? <Spinner/>: 
        <p className="text-center">Busca Letras de tus artistas favoritos</p>}
    </main>
    </>
  )
}

export default AppLetras