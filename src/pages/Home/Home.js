import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import './Home.css'
import React from 'react'
import Painel from '../../componentes/Painel/Painel'

export default function Home(){
    return(
        <div style={{overflowX:'hidden'}}>
            <Cabecalho></Cabecalho>
            <Painel></Painel>
            <div className='quem'>
                <dv className='titulo'>
                    <h1><strong>Quem somos</strong></h1>
                </dv>
                <div className='info'>
                    <h3>Netshoes é uma empresa brasileira de comércio eletrônico de artigos esportivos fundada em 
                        fevereiro de 2000 por Marcio Kumruian e Hagop Chabab e adquirido pela Magazine Luiza em 2019. 
                        A Netshoes possui centros de distribuições no Brasil, e administra as lojas oficiais dos clubes 
                        de futebol como Santos Futebol Clube, Corinthians, São Paulo Futebol Clube, Palmeiras, Internacional, 
                        Cruzeiro, Vasco da Gama, Coritiba, Cruz Azul, Chivas, Monterrey, River Plate, San Lorenzo e América do México. 
                        É também representante oficial dos produtos da National Basketball Association (NBA) na América Latina e responsável 
                        pela administração das lojas virtuais das marcas Puma, Havaianas, Globo Esporte, Oakley, Timberland,
                         Topper, Kappa Mizuno e UFC.[6][7] Também trabalha com calçados,acessórios para esportes e eletrônicos.</h3>
                </div>
            </div>
        </div>
    )
}