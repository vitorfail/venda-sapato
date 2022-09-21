import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import './Home.css'
import React from 'react'
import Painel from '../../componentes/Painel/Painel'

export default function Home(){
    return(
        <div>
            <Cabecalho></Cabecalho>
            <Painel></Painel>
        </div>
    )
}