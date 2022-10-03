import './Painel.css'
import React, {useState, useRef, useEffect} from 'react'

export default function Painel(props){
    const ref = useRef([]);
    const ref2 = useRef([])
    const imagens = props.fotos
    const [ ativodireita, setativodireita] = useState(false)
    const [i, seti] = useState(0)

    function moverdireita(){
        if(ativodireita === false){
            setativodireita(true)
            if(i+1 === imagens.length){
                let dist = (100*(i+1))
                ref2.current[i].style.background = 'white'
                ref2.current[imagens.length-1].style.background= 'rgba(255, 255, 255, 0.479)'
                ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)'
                ref.current[0].style.transform ='translate3d(0%, 0,0)'
                let quantidade_imagens = imagens.length
                setTimeout(() => {
                    for(let o = 1; o< quantidade_imagens;o++){
                        ref.current[o].style.display ='none'
                    }
                    setTimeout(() => {
                        for(let o = 1; o< quantidade_imagens;o++){
                            ref.current[o].style.transform ='translate3d(0%, 0,0)'
                        }
                        for(let o = 1; o< quantidade_imagens;o++){
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
                        ref2.current[i+1].style.background = 'white'
                        ref2.current[i].style.background= 'rgba(255, 255, 255, 0.479)'
                        ref.current[i+1].style.transform ='translate3d(-'+dist+'%, 0,0)'
                        setTimeout(() => ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 100)
                        setTimeout(() => ref.current[0].style.transform ='translate3d(100%, 0,0)' , 500)
                        seti(i+1)    

                    }
                    else{
                        let dist = 100*(i+1)
                        ref2.current[i].style.background= 'rgba(255, 255, 255, 0.479)'
                        ref2.current[i+1].style.background = 'white'
                        ref.current[i+1].style.transform ='translate3d(-'+dist+'%, 0,0)'
                        setTimeout(() => ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 100)
                        setTimeout(() =>ref.current[i].style.transform ='translate3d(-'+dist+'%, 0,0)', 500)
                        seti(i+1)        
                    }
                }
                else{
                    ref2.current[i].style.background= 'rgba(255, 255, 255, 0.479)'
                    ref2.current[i+1].style.background = 'white'
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
            if(i === 0 ){
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
            ref2.current[i].style.background = 'white'
        }
        setTimeout(() => moverdireita(), 2600)

    })
    return(
        <div className='painel'>
            <div className='direita'>
                <div onClick={() => moverdireita()}>&gt;</div>
            </div>
            <div className='esquerda'>
                <div onClick={() => moveresquerda()}>&lt;</div>
            </div>
            <div className='sombra'>
                {imagens.map((item, index) => (
                    <div ref={(element) => {ref2.current[index] = element}} key={index} className='ponto'></div>
                ))}
            </div>
            <div className="banner" style={{width:'100%'}}>
                <div className='container'>                            
                        {imagens.map((item, index) => (
                        <div ref={(element) => {ref.current[index] = element}} style={{backgroundImage:'url('+item+')'}} key={index} className='imagem'>                                    
                                </div>
                            ))}
                </div>
            </div>
        </div>
    )
}