import React from "react"

export default (props)  => {
    const min = props.min
    const max = props.max

    const random = parseInt((Math.random() * (max-min)) + min)
    return(
        <div>
            <h2>Valor aleatórios</h2>
            <p><strong>Valor mínimo:</strong> {props.min}</p>
            <p><strong>Valor máximo:</strong> {props.max}</p>
            <p><strong>Valor sorteado:</strong> {random}</p>
        </div>
    )
}