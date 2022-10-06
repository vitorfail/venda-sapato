import './Cabecalho.css'
import React, { useEffect, useState } from 'react'
import MoverScroll from '../../MoverScroll'
import Lista from './lista.png'

export default function Cabecalho(){
    const [ header, setheader] = useState(false)
    const [menu, setmenu] = useState('esconder')
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
    function mostrar(){
        if(menu === 'esconder'){
            setmenu('mostrar')
        }
        else{
            setmenu('esconder')
        }
    }
    function subir(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }        
    return(
        <header className={header? 'black':''}>
            <div className='lista' onClick={() => mostrar()}></div>
            <div className='logo'>
                <div onClick={() => subir()} className={header? 'l black':'l'}></div>
            </div>
            <div id={menu} className={header? 'mini-menu black':'mini-menu'}>
                <h2 onClick={() => MoverScroll('.quem')}>Quem somos</h2>
                <h2 onClick={() => MoverScroll('.qualidade')}>Características</h2>
                <h2 onClick={() => MoverScroll('.rh')}>Funcionários</h2>
                <h2 onClick={() => MoverScroll('.contato')}>Contato</h2>
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
