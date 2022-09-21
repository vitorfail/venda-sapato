import './Painel.css'
import React, {useEffect, useState} from 'react'
import Direita from '../../icons/direita.png'
import Esquerda from '../../icons/esquerda.png'
import Banner1 from '../../icons/banner1.jpg'
import Banner2 from '../../icons/banner2.jpg'
import Banner3 from '../../icons/banner3.png'


export default function Painel(){
    const [margemx, setmargemx]= useState(0)
    const [medidatotal, setmedidatotal] = useState(0)
    const [medidaBanner, setmedidaBanner] = useState(0)
    function moverdireita(){
        setmargemx(margemx-window.innerWidth)
    }
    useEffect(() => {
        let largura = window.innerWidth * 3
        setmedidatotal(largura)
        setmedidaBanner(window.innerWidth)
    }, [setmedidatotal, setmedidaBanner])
    return(
        <div className='painel'>
            <div className='direita'>
                <img alt='direito' src={Direita}></img>
            </div>
            <div className='esquerda'>
                <img alt='esquerda' src={Esquerda} onClick={() => moverdireita()}></img>
            </div>

            <div className='banner'>
                <div className='container' style={{width:medidatotal, marginLeft:margemx}}>
                    <div className='imagem' style={{width:medidaBanner}}>
                        <img  alt='banner' src={Banner1}></img>
                    </div>
                    <div className='imagem' style={{width:medidaBanner}}>
                        <img  alt='banner' src={Banner2}></img>
                    </div>
                    <div className='imagem' style={{width:medidaBanner}}>
                        <img  alt='banner' src={Banner3}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}