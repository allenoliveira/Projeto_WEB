import React from "react";

export const Estudante = ({nome,curso,universidade,cidade}) => {
    return(
        <h3>
        Nome: {nome}<br/>
        Curso: {curso}<br/>
        Universidade: {universidade}<br/>
        Cidade: {cidade}<b/>
        </h3>
    )
}
