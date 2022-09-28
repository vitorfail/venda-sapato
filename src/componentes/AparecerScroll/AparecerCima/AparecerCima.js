import React, { useEffect, useState } from "react";
import './AparecerCima.css'

const AparecerCima = (props) => {
    const [ativo, setativo] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', function() {
            var d = document.getElementsByClassName(props.children.props.className)
            if(d[0] !== null){
                for(let i=0; i < d.length;i++){
                    var position = d[i].getBoundingClientRect();
                    if(position.top+150 < window.innerHeight && position.bottom >= 0){
                        if(ativo !==true){
                            setativo(true)    
                            d[i].id = 'cima'
                        }
                    }
                    if(position.bottom -(position.bottom*0.4)> window.innerHeight){
                        d[i].id = ''
                        setativo(false)    
                    }
                }
            }
        });
    })
    return(
        props.children
    )
}
export default AparecerCima