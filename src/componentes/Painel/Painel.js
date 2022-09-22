import './Painel.css'
import React, {useState} from 'react'
import Direita from '../../icons/direita.png'
import Esquerda from '../../icons/esquerda.png'
import Banner1 from '../../icons/banner1.png'
import Banner2 from '../../icons/banner2.jpg'
import Banner3 from '../../icons/banner3.png'


export default function Painel(){
    const [um, setum]= useState('imagem')
    const [dois, setdois]= useState('imagem')
    const [tres, settres]= useState('imagem')

    function moverdireita(){
        setum('imagem ative')
        console.log('passou aqui')
    }
    return(
        <div className='painel'>
            <div className='direita'>
                <img alt='direito' src={Direita} onClick={() => moverdireita()}></img>
            </div>
            <div className='esquerda'>
                <img alt='esquerda' src={Esquerda} ></img>
            </div>

            <div className='banner'>
                <div className='container'>
                    <div key={1} className={um}>
                        <img  alt='banner' src={Banner1}></img>
                    </div>
                    <div key={2} className={dois}>
                        <img  alt='banner' src={Banner2}></img>
                    </div>
                    <div key={3} className={tres}>
                        <img  alt='banner' src={Banner3}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}