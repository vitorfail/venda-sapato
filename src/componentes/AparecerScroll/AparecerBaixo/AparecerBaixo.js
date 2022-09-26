import React, { useEffect, useState } from "react";
import './AparecerBaixo.css'

const AparecerBaixo = (props) => {
    const [ativo, setativo] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', function() {
            var d = document.getElementsByClassName(props.children.props.className)
            if(d[0] !== null){
                var position = d[0].getBoundingClientRect();
                if(position.top+150 < window.innerHeight && position.bottom >= 0){
                    if(ativo !==true){
                        setativo(true)    
                        d[0].id = 'baixo'
                    }
                }
                if(position.bottom-(position.bottom*0.1) > window.innerHeight){
                    d[0].id = ''
                    setativo(false)    
                }
            }
        });
    })
    return(
        props.children
    )
}
export default AparecerBaixo