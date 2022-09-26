import React, { useEffect } from "react";
import AparecerBaixo from "../AparecerScroll/AparecerBaixo/AparecerBaixo";
import './CarroselInfinito.scss'

export function CarroselInfinito(props){
    return(
            <div className="carossel-infinito" style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <AparecerBaixo>
                    <div className="slider" style={{width:props.largura}}>
                        <section className="slide-track">
                            {props.fotos.map((item, index) => (
                                <div key={index} className="slide">
                                    <img src={item} height="100" width="250" alt="" />
                                </div>
                            ))}
                        </section>
                    </div>
                </AparecerBaixo>
            </div>

    )
}
