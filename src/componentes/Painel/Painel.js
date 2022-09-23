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
        if(i === array.length-2){
            ref.current[0].className = 'imagem preparo'
            var atual = i
            var proxima = atual+1
            ref.current[proxima].className = 'imagem ative'
            ref.current[atual].className = 'imagem saindo'
            setTimeout(() =>ref.current[atual].className = 'imagem', 700)
            seti(i+1)
        }
        else{
            if(i === array.length-1){
                console.log('passou aqui')
                ref.current[0].className = 'imagem ative'
                ref.current[i].className = 'imagem saindo'
                setTimeout(() =>ref.current[i].className = 'imagem', 700)

                seti(0)
            }
            else{
                var atual = i
                var proxima = atual+1
                ref.current[proxima].className = 'imagem ative'
                ref.current[atual].className = 'imagem saindo'
                setTimeout(() =>ref.current[atual].className = 'imagem', 700)
                seti(i+1)
                console.log(i)    
            }
        }
    }
    useEffect(() => {
        if(i ===0 ){
            ref.current[0].className = 'imagem ative'
            ref.current[1].className = 'imagem preparo'
        }
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