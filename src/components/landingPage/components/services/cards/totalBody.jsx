import touchIcon from '../../../../../assets/icons/touchScreen.svg';
import pointerHover from '../../../../../assets/icons/pointerHover.svg';
import { useState, useEffect } from 'react';

export const TotalBody = ({animation, origin})=>{
    const [cardOpen, setCardOpen] = useState(false);
    const [styleCard, setStyleCard] = useState("container_card_inner");
    useEffect(()=>{
        if(origin == "mobile"){
            const body = document.querySelector("body")
            const handlerTouch = (event)=>{
                const card = document.querySelector(`#total_body_card_${origin}`);
                if(card.contains(event.target)){
                    if(!cardOpen){
                        setCardOpen(true);
                    }
                }else{
                    setCardOpen(false)
                }
            }
            body.addEventListener("touchstart", handlerTouch);
            return ()=>{
                body.removeEventListener("touchstart", handlerTouch);
            }
        }
    },[origin])
    useEffect(()=>{
        setStyleCard(cardOpen? "container_card_inner container_card_inner_open" : "container_card_inner");
    },[cardOpen]);
    useEffect(()=>{
        setStyleCard(animation? "container_card_inner container_card_animation_Y" : "container_card_inner");
    },[animation]);
    return(
        <div id={`total_body_card_${origin}`} className={styleCard}>
            <div className="front-end">
                <span>TOTAL BODY</span>
                <img className= 'img_touch' src={touchIcon} alt='icon touch'/>
                <img className= 'img_pointer' src={pointerHover} alt='icon pointer'/>
            </div>
            <div className="back-end">
                <div className="container_info">
                    <div className="container_title">
                        <h3> TOTAL BODY</h3>
                    </div>
                    <div className="container_description">
                        <ul>
                            <li>Fortalecimiento de músculos estabilizadores</li>
                            <li>Mejora del equilibrio</li>
                            <li>Coordinación y flexibilidad</li>
                            <li>Prevención de lesiones. </li>
                            <li>Mejora de rendimiento en actividades deportivas</li>
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