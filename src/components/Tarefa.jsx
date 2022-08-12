import { useState, useEffect } from "react";

export default function Tarefa(){
    const [input, setInput] = useState('')
    const [tarefas, setTarefas] = useState([
        "Estudar javaScript",
        "Estudar React"
    ])

    useEffect(()=>{
        const tarefasStorage = localStorage.getItem('@tarefa')

        if(tarefasStorage){
            setTarefas(JSON.parse(tarefasStorage))
        }

    }, [])

    useEffect(()=>{
        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
    }, [tarefas])


    function registrar(event){
        event.preventDefault();
       /// alert('tarefa registrada')
       setTarefas([...tarefas, input])
       setInput('')
    }

    return(
        <div>
            <h2>Tarefas</h2>
            <form onSubmit={registrar}>
            <label>Nome da tarefa:</label><br />
            <input placeholder="Digite uma tarefa" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button type="submit">Registrar</button>
        </form>
        <div>
            <ul>
                {tarefas.map(tarefa =>(
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
        </div>
        </div>
    )
}