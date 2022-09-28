import './Painel.css'
import './Painel.scss'
import React, { useEffect} from 'react'
import Direita from '../../icons/direita.png'
import Esquerda from '../../icons/esquerda.png'

export default function Painel(props){
    const imagens = props.fotos

    function moverdireita(){
    }
    function moveresquerda(){
    }
    useEffect(() => {

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
                <section className='container'>
                    {imagens.map((item, index) => {
                        return(<div key={index} className='imagem'>
                                    <img  alt='banners' style={{height:'100%', width:'100%'}} src={item}></img>
                                </div>)
                            })}
                </section>
            </div>
        </div>
    )
}