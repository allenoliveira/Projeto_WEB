import React from 'react';

const Filho = ({nomePai,callbackPai}) => {
    return (
        <div>
            
            <button onClick={()=>callbackPai("- Sou o filho do Mateus")} >

                Oi {nomePai}!
            </button>

        </div>

    )
}

export default Filho