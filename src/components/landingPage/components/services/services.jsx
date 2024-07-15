import {Boxeo} from './cards/boxeo.jsx';
import { TotalBody } from './cards/totalBody.jsx';
import { Personalizado } from './cards/personalizado.jsx';
import { useState, useEffect } from 'react';
export const Services = ()=>{

    const [animation, setAnimation] = useState(false);

    useEffect(()=>{
        const cards = document.querySelector('.services_container');
        const verifyVisibility = (entries)=>{
            const entry = entries[0];
            if(entry.isIntersecting){
                setAnimation(true);
            }else if (animation){
                setAnimation(false)
            }
        }
        const observer = new IntersectionObserver(verifyVisibility, {threshold: 0.5});
        observer.observe(cards);
        return( ()=>{
            observer.unobserve(cards)
        })
    })

    return(
        <section id='trainings_section'>
            <div className='services_container'>
                <div className="services_container_desktop">
                    <h2>¿Que ofrecemos? </h2>
                    <div className="container_cards">
                        <div className="container_card_horizontal">
                            <Personalizado animation={animation}/>
                        </div>
                        <div className="container_card_vertical">
                            <TotalBody animation={animation}/>
                        </div>
                        <div className="container_card_horizontal">
                            <Boxeo animation={animation}/>
                        </div>
                    </div>
                </div>
                <div className="services_container_mobile">
                    <div className='container_cards'>
                        <div className='column1'>
                            <div className="container_card_horizontal">
                                <Personalizado animation={animation}/>
                            </div>
                            <div className="container_card_horizontal">
                                <Boxeo animation={animation}/>
                            </div>
                        </div>
                        <div className='column2'>
                            <div className='container_title'>
                                <h2>¿Que <br/>ofrecemos? </h2>
                            </div>
                            <div className="container_card_vertical">
                                <TotalBody animation={animation}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}