import './Painel.css'
import React, {useState, useRef, useEffect} from 'react'
import Direita from '../../icons/direita.png'
import Esquerda from '../../icons/esquerda.png'
import Banner1 from '../../icons/banner1.png'
import Banner2 from '../../icons/banner2.jpg'
import Banner3 from '../../icons/banner3.png'


export default function Painel(){
    const ref = useRef([]);
    const array = [0, 1, 2]
    const imagens = [Banner1, Banner2, Banner3]
    const [i, seti] = useState(0)

    function moverdireita(){
        ref.current[i].className = 'imagem saindo'
        ref.current[i+1].className = 'imagem ative'
        seti(i+1)
    }
    useEffect(() => {
        ref.current[0].className = 'imagem ative'
    })
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
                    {array.map((item, index) => {
                        return(<div ref={(element) => {ref.current[index] = element;}} key={index} className='imagem'>
                                    <img  alt='banner' src={imagens[index]}></img>
                                </div>)
                            })}
                </div>
            </div>
        </div>
    )
}