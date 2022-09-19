import React from 'react';
//import Heroi from './Heroi';

/*const Grupo = ({titulo})=>{
    return(
        <div>
            <h1>{titulo}</h1>
            <Heroi nome='Capitão América' />
            <Heroi nome='Hulk' />
            <Heroi nome='Viúva Negra' />
            <Heroi nome='Homem de Ferro' />
        </div>
    )
    {props.children}
}*/

const Grupo = (props) => {
    return(
        <div>
            <h1>{props.titulo}</h1>
            {
                React.Children.map(
                    props.children,
                    (elemento)=>{
                    return React.cloneElement(elemento,{titulo:props.titulo})
                     }
                )
            }
        </div>
    )
}
export default Grupo



