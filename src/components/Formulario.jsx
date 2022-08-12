import {useState} from "react";
import React from "react";
import { useReducer } from "react";

export default function Formulario(){

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [idade, setIdade] = useState(0)

    const [user, setUser] = useState({})

    function registrar(e){
        alert("Está Funcionando!")
        e.preventDefault()

        setUser({
            nome:nome,
            email:email,
            idade:idade
        })
    }

    return(
        <div>
            <form onSubmit={registrar}>
                <label>Nome: </label><br />
                <input placeholder="Digite seu Nome: " value={nome} onChange={(e)=> setNome(e.target.value)} /><br />

                <label>Email: </label><br />
                <input placeholder="Digite seu Email: " value={email} onChange={(e)=> setEmail(e.target.value)} /><br />

                <label>Idade: </label><br />
                <input placeholder="Digite sua Idade: " value={idade} onChange={(e)=> setIdade(e.target.value)}/><br />

                <button type="submit">Registrar</button><br />

                <div>
                    <span>Bem vindo(a): {user.nome}</span><br />
                    <span>Idade: {user.idade}</span><br />
                    <span>Email: {user.email}</span><br />
                </div>

            </form>
        </div>
    )
}