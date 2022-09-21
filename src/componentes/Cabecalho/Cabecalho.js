import './Cabecalho.css'
import React from 'react'
import Logo from '../../icons/logo.png'

export default function Cabecalho(){
    return(
        <header>
            <div className='logo'>
                <img src={Logo}></img>
            </div>
            <div  className='info'>
                <h2>Quem somos</h2>
                <h2>Trabalhe conosco</h2>
                <h2>Produtos</h2>
                <h2>Contato</h2>
            </div>
        </header>
    )
}
