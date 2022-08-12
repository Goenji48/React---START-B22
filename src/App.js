import React from 'react'
import './index.css'
import Primeiro from './components/Primeiro'
import Comparametro from './components/Comparametro'
import Fragmento from './components/Fragmento'
import Cartao from './components/modelo/Cartao'
import './App.css'
import Numeros from './components/Numeros'
import Fotos from './components/Fotos'
import Imagem from './images/1bf8200888ca4801c0b33cbdcf26f33b.jpg'
import ListaFuncao from './components/ListaFuncao'
import Nomes from './components/Nomes'
import Formulario from './components/Formulario'
import Tarefa from './components/Tarefa'

//<h1>{hoje}</h1><p id='paragrafo'>teste</p>

//const hoje = 'Terça-Feira'

export default function App() {
    return (
        <div className='App'>
                <h1>Fundamentos React</h1>
                <div className='Cards'>
                    <Cartao titulo='Lista de Tarefas'><Tarefa/></Cartao>
                    <Cartao titulo='Lista' color='#D4795F'><ListaFuncao/></Cartao>
                    <Cartao titulo='Primero Componente React' color='orange'><Primeiro /></Cartao>
                    <Cartao titulo='Primero Componente com props' color='red'><Comparametro titulo='Hoje é quarta-feira' subtitulo='03/08/2022' color='green' /></Cartao>
                    <Cartao titulo='Primeiro Componente com props' color='#CDE854'><Comparametro titulo='Aula de React' subtitulo='Parametros' /></Cartao>
                    <Cartao titulo='Primeiro Componente com props' color='#00F74F'><Comparametro titulo='titulo teste' /></Cartao>
                    <Cartao titulo='Utilizando React.Fragment'><Fragmento /></Cartao>
                    <Cartao titulo='Numeros Aleatórios' color='#4CC6F5'><Numeros min={10} max={100}/></Cartao>
                    <Cartao titulo='Imagens'><Fotos image={Imagem}/></Cartao>
                    <Cartao titulo='Nomes' color='#3348FF'><Nomes nome='João'/></Cartao>
                    <Cartao titulo='Manipulando Formulario' color='#BC31F5'><Formulario/></Cartao>
            </div>
        </div>
    )
}