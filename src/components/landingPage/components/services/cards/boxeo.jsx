import touchIcon from '../../../../../assets/icons/touchScreen.svg';
import pointerHover from '../../../../../assets/icons/pointerHover.svg';
import { useEffect, useState } from 'react';
export const Boxeo = ({animation, origin})=>{
    const [cardOpen, setCardOpen] = useState(false);
    const [styleCard, setStyleCard] = useState("container_card_inner");
    useEffect(()=>{
        if(origin == "mobile"){
            const body = document.querySelector("body")
            const handlerTouch = (event)=>{
                const card = document.querySelector(`#boxeo_card_${origin}`);
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
        <>
            <div id={`boxeo_card_${origin}`} className={styleCard}>
                <div className="front-end">
                    <span>BOXEO</span>
                    <img className= 'img_touch' src={touchIcon} alt='icon touch'/>
                    <img className= 'img_pointer' src={pointerHover} alt='icon pointer'/>
                </div>
                <div className="back-end">
                <div className="container_info">
                        <div className="container_title">
                            <h3>BOXEO</h3>
                        </div>
                        <div className="container_description">
                            <ul>
                                <li>Desarrollo de fuerza, resistencia y velocidad, y mejoras en la coordinación y agilidad.</li>
                                <li>Excelente ejercicio cardiovascular que ayuda a quemar calorías.</li>
                                <li>Aumenta la confianza en uno mismo, reduce el estrés y mejora la concentración y disciplina.</li>
                            </ul>
                        </div>
                        <div className="container_button">
                            <a href='https://wa.me/543547579422' target='_blanck'>Consultar</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}