import { useState } from "react";
const Contador = ()=> {

    const [contador,setContador] = useState(10)
    const [sena,setSena] = useState(true)
    // let contador = 0

    const contar = ()=> {
       // contador = contador + 1
        // console.log(contador)
        setContador(contador + 1)
    }

    const modificarSena = ()=> {
        setSena(!sena)
    
    }
    const renderizarSena = ()=> {
        if(sena)
        return (
            <img src = "https://www.quixada.ufc.br/wp-content/uploads/2015/05/IMG_20190222_140235687_HDR-e1550869224744-240x333.jpg" alt="João Marcelo"/>
            
        )
        return null
    }


    return(
        <div>
            <h2> Contador {contador}</h2>
            <button onClick={contar}>Acrescentar</button>
            <button onClick={modificarSena}>João Marcelo</button>
            {
                renderizarSena()
            }
        </div>
    )

}

export default Contador