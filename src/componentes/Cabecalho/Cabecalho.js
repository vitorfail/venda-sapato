import './Cabecalho.css'
import React, { useEffect, useState } from 'react'
import Logo from '../../icons/logo.png'

export default function Cabecalho(){
    const [ header, setheader] = useState(false)
    useEffect(() =>{
        const rolagem = () =>{
            if(window.scrollY> 10){
                setheader(true)
            }
            else{
                setheader(false)
            }
        }
        window.addEventListener("scroll", rolagem)
        return () => {
          window.removeEventListener("scroll", rolagem)
        }
    })
    return(
        <header className={header? 'black':''}>
            <div className='logo'>
                <div className={header? 'l black':'l'}></div>
            </div>
            <div className={header? 'info black':'info'}>
                <h2>Quem somos</h2>
                <h2>Trabalhe conosco</h2>
                <h2>Produtos</h2>
                <h2>Contato</h2>
            </div>
        </header>
    )
}
