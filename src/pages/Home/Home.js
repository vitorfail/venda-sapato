import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import './Home.css'
import React, { useEffect } from 'react'
import Painel from '../../componentes/Painel/Painel'
import { CarroselInfinito } from '../../componentes/CarroselInfinito/CarroselInfinito'
import Sede from '../../icons/sede.jpg'
import Banner1 from '../../icons/banner1.png'
import Banner2 from '../../icons/banner2.png'
import Banner3 from '../../icons/banner3.png'
import Banner4 from '../../icons/banner4.jpg'
import Banner5 from '../../icons/banner5.jpg'
import AparecerEsquerda from '../../componentes/AparecerScroll/AparecerEsquerda/AparecerEsquerda'
import AparecerDireita from '../../componentes/AparecerScroll/AparecerDireita/AparecerDireita'
import AparecerCima from '../../componentes/AparecerScroll/AparecerCima/AparecerCima'
import Tennis1 from '../../icons/tennis.png'
import Tennis2 from '../../icons/tennis2.png'
import Tennis3 from '../../icons/tennis3.png'
import Tennis4 from '../../icons/tennis4.png'
import Tennis5 from '../../icons/tennis5.png'
import Tennis6 from '../../icons/tennis6.png'
import Tennis7 from '../../icons/tennis7.png'
import Tennis8 from '../../icons/tennis8.png'
import Rodape from '../../componentes/Rodape/Rodape'


export default function Home(){
    useEffect(() =>{
    })
    const fotos_ = [Banner1, Banner2, Banner3, Banner4, Banner5]
    const fotos_produtos = [Tennis1, Tennis2, Tennis3, Tennis4, Tennis5, Tennis6, Tennis7, Tennis8]
    return(
        <div style={{overflowX:'hidden'}}>
            <Cabecalho></Cabecalho>
            <Painel fotos={fotos_}></Painel>
            <div className='quem'>
                <div className='titulo'>
                    <h1><strong>QUEM SOMOS</strong></h1>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'70%'}}>
                    <AparecerEsquerda>
                        <div className='left'>
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
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <h2>Missão</h2>
                                <h3>INSPIRAR E TRANSFORMAR A VIDA DAS PESSOAS COM ESPORTE E LAZER.</h3>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <h2>Visão</h2>
                                <h3>A MELHOR E MAIS INOVADORA EXPERIÊNCIA DE COMPRA DO VAREJO ESPORTIVO.</h3>
                            </div>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <h2>Valores</h2>
                                <h3>ADRENALINA, ESPÍRITO DE EQUIPE, INSPIRAÇÃO E FOCO.</h3>
                            </div>
                        </div>
                    </AparecerDireita>
                </div>
            </div>
            <AparecerCima>
                <div className='produto-destaque' style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <h1 style={{textAlign:'center'}}>Produtos em destaque</h1>
                </div>
            </AparecerCima>
            <CarroselInfinito largura={'50%'} fotos={fotos_produtos}></CarroselInfinito>
            <Rodape></Rodape>
        </div>
    )
}
