import React from "react"
import './foto.css'

export default (props) =>{

    const nomes = ['João', 'Maria', 'Pedro', 'Guilherme']

    return (
        <div>
            <img src={props.nome}/>
        </div>
    )
}