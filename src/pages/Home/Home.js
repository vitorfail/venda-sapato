import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import './Home.css'
import React, { useEffect } from 'react'
import Painel from '../../componentes/Painel/Painel'
import { CarroselInfinito } from '../../componentes/CarroselInfinito/CarroselInfinito'
import Sede from '../../icons/sede.jpg'
import Banner1 from '../../icons/banner1.png'
import Banner2 from '../../icons/banner2.jpg'
import Banner3 from '../../icons/banner3.png'
import Banner4 from '../../icons/banner4.jpg'
import Banner5 from '../../icons/banner5.jpg'
import AparecerEsquerda from '../../componentes/AparecerScroll/AparecerEsquerda/AparecerEsquerda'
import AparecerDireita from '../../componentes/AparecerScroll/AparecerDireita/AparecerDireita'
import AparecerCima from '../../componentes/AparecerScroll/AparecerCima/AparecerCima'
import AparecerBaixo from '../../componentes/AparecerScroll/AparecerBaixo/AparecerBaixo'


export default function Home(){
    useEffect(() =>{
    })
    const fotos_ = [Banner1, Banner2, Banner3, Banner4, Banner5]
    const fotos_produtos = ["https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png", 
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png","https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"]
    return(
        <div style={{overflowX:'hidden'}}>
            <Cabecalho></Cabecalho>
            <Painel fotos={fotos_}></Painel>
            <div className='quem'>
                <AparecerEsquerda>
                    <div className='left'>
                        <div className='titulo'>
                            <h1><strong>Quem somos</strong></h1>
                        </div>
                        <div className='info'>
                            <h3>Netshoes é uma empresa brasileira de comércio eletrônico de artigos esportivos fundada em 
                                fevereiro de 2000 por Marcio Kumruian e Hagop Chabab e adquirido pela Magazine Luiza em 2019. 
                                A Netshoes possui centros de distribuições no Brasil, e administra as lojas oficiais dos clubes 
                                de futebol como Santos Futebol Clube, Corinthians, São Paulo Futebol Clube, Palmeiras, Internacional, 
                                Cruzeiro, Vasco da Gama, Coritiba, Cruz Azul, Chivas, Monterrey, River Plate, San Lorenzo e América do México. 
                                É também representante oficial dos produtos da National Basketball Association (NBA) na América Latina e responsável 
                                pela administração das lojas virtuais das marcas Puma, Havaianas, Globo Esporte, Oakley, Timberland,
                                Topper, Kappa Mizuno e UFC. Também trabalha com calçados,acessórios para esportes e eletrônicos.</h3>
                        </div>
                    </div>
                </AparecerEsquerda>
                <AparecerDireita>
                    <div className='sede-direita'>
                        <img src={Sede}></img>
                    </div>
                </AparecerDireita>
            </div>
            <AparecerCima>
                <div className='produto-destaque' style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <h1 style={{textAlign:'center'}}>Produtos em destaque</h1>
                </div>
            </AparecerCima>
            <AparecerBaixo>
                <CarroselInfinito largura={'50%'} fotos={fotos_produtos}></CarroselInfinito>
            </AparecerBaixo>
        </div>
    )
}