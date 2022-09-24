import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import './Home.css'
import React from 'react'
import Painel from '../../componentes/Painel/Painel'

export default function Home(){
    return(
        <div style={{overflowX:'hidden'}}>
            <Cabecalho></Cabecalho>
            <Painel></Painel>
            <div className='quem'>
                <h1><strong>Quem somos</strong></h1>
                <h3>Somos um emmpresa marcada pela qualidade dos nossos produtos 
                    e em clientes manter nossos clientes contantemente satisfeitos</h3>
            </div>
        </div>
    )
}