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
                let dist = (100*(i+1))
                ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)'
                ref.current[0].style.transform ='translate3d(0%, 0,0)'
                let quantidade_imagens = imagens.length
                setTimeout(() => {
                    for(var o = 1; o< quantidade_imagens;o++){
                        ref.current[o].style.display ='none'
                    }
                    setTimeout(() => {
                        for(var o = 1; o< quantidade_imagens;o++){
                            ref.current[o].style.transform ='translate3d(0%, 0,0)'
                        }
                        for(var o = 1; o< quantidade_imagens;o++){
                            ref.current[o].style.display ='block'
                        }
                    }, 100)
                }, 800)
                seti(0)
            }
            else{
                if(i !== 0){
                    if(i+2 === imagens.length){
                        let dist = (100*(i+1))
                        let df =100*(i)
                        ref.current[i+1].style.transform ='translate3d(-'+dist+'%, 0,0)'
                        setTimeout(() => ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 100)
                        setTimeout(() => ref.current[0].style.transform ='translate3d(100%, 0,0)' , 500)
                        seti(i+1)    
        
                    }
                    else{
                        let dist = 100*(i+1)
                        ref.current[i+1].style.transform ='translate3d(-'+dist+'%, 0,0)'
                        setTimeout(() => ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 100)
                        setTimeout(() =>ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 500)
                        seti(i+1)        
                    }
                }
                else{
                    ref.current[0].style.transform ='translate3d(-100%, 0,0)'
                    ref.current[0+1].style.transform ='translate3d(-100%, 0,0)'
                    seti(i+1)  
                }
            }
            setTimeout(() => { setativodireita(false)}, 1000);
        }
    }
    function moveresquerda(){
        if(ativodireita === false){
            if(i == 0 ){
                for(var h = 0; h< imagens.length; h++){
                    if(h === imagens.length-1){
                        ref.current[h].style.transform ='translate3d(-'+((h)*100)+'%, 0,0)'
                        console.log('p aqui')
                    }
                    else{
                        if(h === 0){
                            ref.current[0].style.transform ='translate3d(-100%, 0,0)'
                        }
                        else{
                            ref.current[h].style.transform ='translate3d(-'+((h+1)*100)+'%, 0,0)' 
                        }
                    }
                }
                seti(imagens.length-1)
            }
            else{
                if(i+1 === imagens.length){
                    setativodireita(true)
                    let dist = (-100*(i-1))
                    ref.current[i].style.transform ='translate3d('+dist+'%, 0,0)'
                    ref.current[i-1].style.transform ='translate3d('+dist+'%, 0,0)'
                    seti(i-1)        
                    setTimeout(() => { setativodireita(false)}, 1000);        
                    ref.current[0].style.transform ='translate3d(-100%, 0,0)'
                }
                else{
                    setativodireita(true)
                    let dist = (-100*(i-1))
                    ref.current[i].style.transform ='translate3d('+dist+'%, 0,0)'
                    ref.current[i-1].style.transform ='translate3d('+dist+'%, 0,0)'
                    seti(i-1)        
                    setTimeout(() => { setativodireita(false)}, 1000);        
                }
            }
        }
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
                        return(<div ref={(element) => {ref.current[index] = element;}} style={{backgroundImage:'url('+imagens[index]+')'}} key={index} className='imagem'>
                                </div>)
                            })}
                </div>
            </div>
        </div>
    )
}