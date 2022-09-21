import './Painel.css'
import React, {useEffect, useState} from 'react'
import Direita from '../../icons/direita.png'
import Esquerda from '../../icons/esquerda.png'
import Banner from '../../icons/banner.jpg'


export default function Painel(){
    const [medidatotal, setmedidatotal] = useState(0)
    const [medidaBanner, setmedidaBanner] = useState(0)
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
                <img alt='esquerda' src={Esquerda}></img>
            </div>

            <div className='banner'>
                <div className='container' style={{width:medidatotal}}>
                    <div className='imagem' style={{width:medidaBanner}}>
                        <img src={Banner}></img>
                    </div>
                    <div className='imagem' style={{width:medidaBanner}}>
                        <img src={Banner}></img>
                    </div>
                    <div className='imagem' style={{width:medidaBanner}}>
                        <img src={Banner}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}