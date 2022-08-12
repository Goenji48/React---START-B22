import React from "react";
import { useState } from "react";

export default (props) =>{

const [nome, setNome] = useState('B22')    

function trocarNome(nome){
    //alert("Trocar")
    setNome(nome)
}

    return(
        <div>
            <h2>Olá: {nome} </h2>
            <button onClick={()=>trocarNome('João')}>Trocar nome</button>
        </div>
    )
}