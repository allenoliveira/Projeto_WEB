import React from "react";

const Disciplina = (props)=> {
    return (
        <div>
            <h1>{props.disciplina}</h1>
            {
                React.Children.map(
                    props.children,
                    (estudante)=>{
                    return React.cloneElement(estudante,{disciplina:props.disciplina})
                     }
                )
     }
        </div>
    )
}   

export default Disciplina;