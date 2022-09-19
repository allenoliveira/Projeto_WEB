import { useState } from "react";

const Votacidade = ()=> {
const [quixada,setQuixada] = useState (0)
const [limoeirodonorte,setLimoeirodoNorte] = useState (0)
const [crateus,setCratreus] = useState (0)

    const votarquixada = ()=> {
        setQuixada(quixada + 1)
    }

    const votarlimoeiro= ()=> {
        setLimoeirodoNorte(limoeirodonorte + 1)
    }

    const votarcrateus = ()=> {
        setCratreus(crateus + 1)
    }

    const ganhar=() => {
        if (quixada > limoeirodonorte && quixada > crateus) {
            alert ('Ganhador Quixada')
        }else if (limoeirodonorte > quixada && limoeirodonorte > crateus){
            alert ('Ganhador Limoeiro do Norte')
        }else if (crateus > quixada && crateus > limoeirodonorte){
            alert ('Ganhador Crateus') 
        }else{
            alert ("A votação deu empate, deve ir pro segundo turno")
        }

    }
    const reset = ()=>{
        if (quixada !== ''){
            setQuixada(0)
        }
        if (limoeirodonorte !== ''){
            setLimoeirodoNorte(0)
        }
        if (crateus !== ''){
            setCratreus(0)
        }

    }

    //Não sei se é uma boa prática o que tentei fazer para zerar.
    //O professor poderia vre essa parte com nós.


    return (
        <div>
            <div>
            <h2>Vota Quixada: {quixada}</h2>
            <h2>Limoeiro do Norte: {limoeirodonorte}</h2>
            <h2>Crateus: {crateus}</h2>
        </div>

        <div>
            <button onClick={votarquixada}> Quixada</button>
            <button onClick={votarlimoeiro}> Limoeiro do Norte</button>
            <button onClick={votarcrateus}> Crateus</button>
            <button onClick={ganhar}>Resultado</button>
            <button onClick={reset}>Resetar</button>
            </div>
        </div>
    )

    
}

export default Votacidade