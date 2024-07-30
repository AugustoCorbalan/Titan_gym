import touchIcon from '../../../../../assets/icons/touchScreen.svg';
import pointerHover from '../../../../../assets/icons/pointerHover.svg';
import { useState, useEffect } from 'react';

export const Personalizado = ({animation, origin})=>{
    const [cardOpen, setCardOpen] = useState(false);
    const [styleCard, setStyleCard] = useState("container_card_inner");
    useEffect(()=>{
        if(origin == "mobile"){
            const body = document.querySelector("body")
            const handlerTouch = (event)=>{
                const card = document.querySelector(`#personalizado_card_${origin}`);
                if(card.contains(event.target)){
                    if(!cardOpen){
                        setCardOpen(true);
                    }
                }else{
                    setCardOpen(false)
                }
            }
            body.addEventListener("touchstart", handlerTouch);
        }
    },[origin])
    useEffect(()=>{
        setStyleCard(cardOpen? "container_card_inner container_card_inner_open" : "container_card_inner");
    },[cardOpen]);
    useEffect(()=>{
        setStyleCard(animation? "container_card_inner container_card_animation_X" : "container_card_inner");
    },[animation]);
    return(
        <div id={`personalizado_card_${origin}`} className={styleCard}>
            <div id="personalizado_front" className="front-end">
                <span>ENTRENAMIENTO <br/> PERSONALIZADO</span>
                <img className= 'img_touch' src={touchIcon} alt='icon touch'/>
                <img className= 'img_pointer' src={pointerHover} alt='icon pointer'/>
            </div>
            <div className="back-end">
                <div className="container_info">
                    <div className="container_title desktop">
                        <h3> ENTRENAMIENTO PERSONALIZADO</h3>
                    </div>
                    <div className="container_title mobile">
                        <h3> ENTRENAMIENTO <br/> PERSONALIZADO</h3>
                    </div>
                    <div className="container_description">
                        <ul>
                            <li>Entrenamiento adaptado a tus necesidades y metas específicas.</li>
                            <li>Seguimiento detallado de tu progreso.</li>
                            <li>Corrección de la técnica para prevenir lesiones y un mayor rendimiento.</li>
                        </ul>
                    </div>
                    <div className="container_button">
                        <a href='https://wa.me/543547579422' target='_blanck'>Consultar</a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}