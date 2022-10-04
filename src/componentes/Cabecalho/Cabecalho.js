import './Cabecalho.css'
import React, { useEffect, useState } from 'react'
import MoverScroll from '../../MoverScroll'

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
    function subir(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }        
    return(
        <header className={header? 'black':''}>
            <div className='logo'>
                <div onClick={() => subir()} className={header? 'l black':'l'}></div>
            </div>
            <div className={header? 'info black':'info'}>
                <h2 onClick={() => MoverScroll('.quem')}>Quem somos</h2>
                <h2 onClick={() => MoverScroll('.qualidade')}>Características</h2>
                <h2 onClick={() => MoverScroll('.rh')}>Funcionários</h2>
                <h2 onClick={() => MoverScroll('.contato')}>Contato</h2>
            </div>
        </header>
    )
}
