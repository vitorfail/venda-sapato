import Cabecalho from '../../componentes/Cabecalho/Cabecalho'
import './Home.css'
import React, { useEffect } from 'react'
import Painel from '../../componentes/Painel/Painel'
import { CarroselInfinito } from '../../componentes/CarroselInfinito/CarroselInfinito'
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
import logo from '../../icons/nike.png'
import Adidas from '../../logos/adidas.png'
import Nike from '../../logos/nike.png'
import Converse from '../../logos/converse.png'
import Lacoste from '../../logos/lacoste.png'
import Oakley from '../../logos/oakley.png'
import Pulma from '../../logos/pulma.png'
import Vans from '../../logos/vans.png'
import Terno from '../../icons/caraterno.jpg'
import Terno2 from '../../icons/terno.jpg'
import Terno3 from '../../icons/mulher.jpg'
import Logos from '../../componentes/Logos'

export default function Home(){
    const fotos_ = [Banner1, Banner2, Banner3, Banner4, Banner5]
    const fotos_produtos = [Tennis1, Tennis2, Tennis3, Tennis4, Tennis5, Tennis6, Tennis7, Tennis8]
    useEffect(() =>{
        let t = (document.querySelector('.titulo')).getBoundingClientRect()
        window.scrollTo({ top: t.top, behavior: 'smooth' });
    })
    return(
        <div style={{overflowX:'hidden'}}>
            <Cabecalho></Cabecalho>
            <Painel fotos={fotos_}></Painel>
            <Logos logos={[Adidas, Nike,Converse,Lacoste,Oakley,Pulma,Vans]}></Logos>
            <div className='quem'>
                <div className='titulo'>
                    <h1><strong>QUEM SOMOS</strong></h1>
                </div>
                <div className='quadro'>
                    <AparecerEsquerda>
                        <div className='left'>
                            <div className='info'>
                                <p>Netshoes ?? uma empresa brasileira de com??rcio eletr??nico de artigos esportivos fundada em 
                                    fevereiro de 2000 por Marcio Kumruian e Hagop Chabab e adquirido pela Magazine Luiza em 2019. 
                                    A Netshoes possui centros de distribui????es no Brasil, e administra as lojas oficiais dos clubes 
                                    de futebol como Santos Futebol Clube, Corinthians, S??o Paulo Futebol Clube, Palmeiras, Internacional, 
                                    Cruzeiro, Vasco da Gama, Coritiba, Cruz Azul, Chivas, Monterrey, River Plate, San Lorenzo e Am??rica do M??xico. 
                                    ?? tamb??m representante oficial dos produtos da National Basketball Association (NBA) na Am??rica Latina e respons??vel 
                                    pela administra????o das lojas virtuais das marcas Puma, Havaianas, Globo Esporte, Oakley, Timberland,
                                    Topper, Kappa Mizuno e UFC. Tamb??m trabalha com cal??ados,acess??rios para esportes e eletr??nicos.</p>
                            </div>
                        </div>
                    </AparecerEsquerda>
                    <AparecerDireita>
                        <div className='sede-direita'>
                            <div className='misao-visao-valores'>
                                <h2 style={{textAlign:'left'}}>Miss??o</h2>
                                <h3 style={{textAlign:'left'}}><strong>???</strong>Inspirar e transformar a vida das pessoas com esporte e lazer.</h3>
                            </div>
                            <div className='misao-visao-valores'>
                                <h2 style={{textAlign:'left'}}>Vis??o</h2>
                                <h3 style={{textAlign:'left'}}><strong>???</strong>A melhor e mais inovadora experi??ncia de compra do varejo esportivo.</h3>
                            </div>
                            <div className='misao-visao-valores'>
                                <h2 style={{textAlign:'left'}}>Valores</h2>
                                <h3 style={{textAlign:'left'}}><strong>???</strong>Adrenalina, esp??rito de equipe, inspira????o e foco.</h3>
                            </div>
                        </div>
                    </AparecerDireita>
                </div>
            </div>
            <div className='qualidade'>
                <div className='left2'>
                    <h1>Nossa maior qualidade ?? a <strong>velocidade de entrega</strong></h1>
                    <h3>Sabemos o quanto os servi??os de entrega brasileiro s??o defasados por conta das vias prec??rias, mas mesmo assim entregamos no prazo e com qualidade</h3>
                    <div className='vantagens'>
                        <h3><strong>???</strong> Entraga em at?? 13 dias</h3>
                        <h3><strong>???</strong> Devolu????o em caso de danos</h3>
                        <h3><strong>???</strong> Acompanhamento pelo site</h3>
                    </div>
                </div>
                <div className='right'>
                    <img alt='tenis' src={logo}></img>
                </div>
            </div>
            <div className='rh'>
                <div>
                    <h2><strong>NOSSOS FUNCION??RIOS</strong></h2>
                </div>
                <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                    <AparecerCima>
                        <div className='card'>
                            <img alt='funcionario' src={Terno}></img>
                            <h3 className='nome'>FL??VIO ANDRADE</h3>
                            <h3 className='descri'>Gerente e administrador. Formado em administra????o na 
                                Universade de Delgado, com p??s em finan??as na Universade do Rio. Com 10 anos
                                de experi??ncia na ??rea de adm ele ?? um dos nossos contribuintes mais antigos</h3>
                        </div>
                    </AparecerCima>
                    <AparecerCima>
                        <div className='card'>
                            <img alt='funcionario' src={Terno2}></img>
                            <h3 className='nome'>ALEXANDRE BEZERRA</h3>
                            <h3 className='descri'>Gerente e administrador. Formado em administra????o na 
                                Universade de Delgado, com p??s em finan??as na Universade do Rio. Com 10 anos
                                de experi??ncia na ??rea de adm ele ?? um dos nossos contribuintes mais antigos</h3>
                        </div>
                    </AparecerCima>
                    <AparecerCima>
                        <div className='card'>
                            <img alt='funcionario' src={Terno3}></img>
                            <h3 className='nome'>MARIA ALICE</h3>
                            <h3 className='descri'>Gerente e administrador. Formado em administra????o na 
                                Universade de Delgado, com p??s em finan??as na Universade do Rio. Com 10 anos
                                de experi??ncia na ??rea de adm ele ?? um dos nossos contribuintes mais antigos</h3>
                        </div>
                    </AparecerCima>
                    <AparecerCima>
                        <div className='card'>
                            <img alt='funcionario' src={Terno}></img>
                            <h3 className='nome'>FL??VIO ANDRADE</h3>
                            <h3 className='descri'>Gerente e administrador. Formado em administra????o na 
                                Universade de Delgado, com p??s em finan??as na Universade do Rio. Com 10 anos
                                de experi??ncia na ??rea de adm ele ?? um dos nossos contribuintes mais antigos</h3>
                        </div>
                    </AparecerCima>
                    <AparecerCima>
                        <div className='card'>
                            <img alt='funcionario' src={Terno2}></img>
                            <h3 className='nome'>ALEXANDRE BEZERRA</h3>
                            <h3 className='descri'>Gerente e administrador. Formado em administra????o na 
                                Universade de Delgado, com p??s em finan??as na Universade do Rio. Com 10 anos
                                de experi??ncia na ??rea de adm ele ?? um dos nossos contribuintes mais antigos</h3>
                        </div>
                    </AparecerCima>
                    <AparecerCima>
                        <div className='card'>
                            <img alt='funcionario' src={Terno3}></img>
                            <h3 className='nome'>MARIA ALICE</h3>
                            <h3 className='descri'>Gerente e administrador. Formado em administra????o na 
                                Universade de Delgado, com p??s em finan??as na Universade do Rio. Com 10 anos
                                de experi??ncia na ??rea de adm ele ?? um dos nossos contribuintes mais antigos</h3>
                        </div>
                    </AparecerCima>
                </div>
            </div>
            <div className='sede'>
                <div className='info2'>
                    <div>
                        <h1>TRABALHE CONOSCO</h1>
                        <h3>Temos algumas vagas abertas em diversas ??reas. Focamos no crescimento profissionais </h3>
                    </div>
                </div>
            </div>
            <AparecerCima>
                <div className='produto-destaque' style={{width:'100%', display:'flex', justifyContent:'center'}}>
                    <h1 style={{textAlign:'center'}}>Produtos em destaque</h1>
                </div>
            </AparecerCima>
            <CarroselInfinito largura={'50%'} fotos={fotos_produtos}></CarroselInfinito>
            <div className="contato">
                <h1>Contato</h1>
                <AparecerCima>
                    <h3 className='titulo-contato'>Caso tenha reclama????es ou queira tirar d??vidas a respeito de um certo assunto, voc?? pode entrar em contato conosco. </h3>
                </AparecerCima>
                <div  className='identif' >
                    <AparecerEsquerda>
                        <div className='contato-user' >
                            <input className='info' placeholder='Nome'></input>
                            <input className='info' placeholder='Email'></input>
                            <input className='info' placeholder='Telefone'></input>
                        </div>
                    </AparecerEsquerda>
                    <AparecerDireita>
                        <div className='msg' >
                            <input className='mensagem' placeholder='Mensagem'></input>
                        </div>
                    </AparecerDireita>    
                </div>
                <div className='enviar'>
                    <button>Enviar mensagem</button>
                </div>
            </div>
            <Rodape></Rodape>
        </div>
    )
}
