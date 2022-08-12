import React from "react"
import funcionario from './data/funcionarios.js'

export default (props) => {
    console.log(funcionario)

    /*const li1 = (

        <li>
            {funcionario[0].id} - {funcionario[0].nome}
        </li>

    )*/

    const lista = funcionario.map((funcionario) => {
        return(
            <li key={funcionario.id}>
            {funcionario.id} - {funcionario.nome}</li>
        )
    })
}