import './Painel.css'
import React, {useState, useRef, useEffect} from 'react'
import Direita from '../../icons/direita.png'
import Esquerda from '../../icons/esquerda.png'
import Banner1 from '../../icons/banner1.png'
import Banner2 from '../../icons/banner2.jpg'
import Banner3 from '../../icons/banner3.png'
import Banner4 from '../../icons/banner4.jpg'
import Banner5 from '../../icons/banner5.jpg'

export default function Painel(){
    const ref = useRef([]);
    const array = [0, 1, 2, 3, 4]
    const imagens = [Banner1, Banner2, Banner3, Banner4, Banner5]
    const [ ativodireita, setativodireita] = useState(false)
    const [i, seti] = useState(0)

    function moverdireita(){
        if(ativodireita === false){
            setativodireita(true)
            if(i+1 === imagens.length){
                ref.current[i].style.transform ='translate3d(-300%, 0,0)'
                ref.current[0].style.transform ='translate3d(0%, 0,0)'
                setTimeout(() =>ref.current[i].style.display ='none', 400)
                setTimeout(() =>ref.current[i].style.transform ='translate3d(100%, 0,0)', 500)
                setTimeout(() =>ref.current[i].style.display ='block', 900)
                seti(0)
                console.log('passou aqui')
            }
            else{
                if(i !== 0){
                    console.log(imagens.length)
                    console.log(i)
                    if(i+2 === imagens.length){
                        let dist = (100*(i+1))
                        ref.current[i+1].style.transform ='translate3d(-'+dist+'%, 0,0)'
                        setTimeout(() => ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 100)
                        setTimeout(() => ref.current[0].style.transform ='translate3d(0%, 0,0)' , 500)
                        setTimeout(() =>ref.current[i].style.transform ='translate3d(100%, 0,0)', 500)
                        seti(i+1)    
        
                    }
                    else{
                        let dist = (100*(i+1))
                        ref.current[i+1].style.transform ='translate3d(-'+dist+'%, 0,0)'
                        setTimeout(() => ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 100)
                        setTimeout(() =>ref.current[i].style.transform ='translate3d(100%, 0,0)', 500)
                        seti(i+1)        
                    }
                }
                else{
                    ref.current[0].style.transform ='translate3d(-100%, 0,0)'
                    ref.current[0+1].style.transform ='translate3d(-100%, 0,0)'
                    setTimeout(() =>ref.current[0].style.transform ='translate3d(100%, 0,0)', 500)
                    seti(i+1)  
                }
            }
            setTimeout(() => { setativodireita(false)}, 1000);
        }
    }
    function moveresquerda(){

        let dist = (-100*(i-1))
        ref.current[i].style.transform ='translate3d('+dist+'%, 0,0)'
        setTimeout(() => { ref.current[i-1].style.transform ='translate3d('+dist+'%, 0,0)'}, 500)
        seti(i-1)    

    }
    useEffect(() => {
        if(i === 0){
        }

    })
    return(
        <div className='painel'>
            <div className='direita'>
                <img alt='direito' src={Direita} onClick={() => moverdireita()}></img>
            </div>
            <div className='esquerda'>
                <img alt='esquerda' src={Esquerda} onClick={() => moveresquerda()} ></img>
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