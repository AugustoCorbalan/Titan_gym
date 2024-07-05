import {Boxeo} from './cards/boxeo.jsx';
import { TotalBody } from './cards/totalBody.jsx';
import { Personalizado } from './cards/personalizado.jsx';
import { useState, useEffect } from 'react';
export const Services = ()=>{

    const [animation, setAnimation] = useState(false);

    useEffect(()=>{
        const handlerScroll = (event)=>{
            const sectionElement = document.getElementById('trainings_section');
            // //Guardo las propiedades de inicio y fin de la seccion
            const sectionTop = sectionElement.getBoundingClientRect().top;
            const sectionBottom = sectionElement.getBoundingClientRect().bottom;
            if(sectionTop < 0 && sectionBottom > 0 && !animation){
                //Modifico la clase animation
                setAnimation(true);
            }
            else if(sectionTop > 0 && animation){
                //Seteo animation en False
                setAnimation(false);
            }
            else if(sectionBottom < 0 && animation){
                //Seteo animation en False
                setAnimation(false);
            }

        }
        document.addEventListener("scroll", handlerScroll);
        return ()=>{
            document.removeEventListener("scroll", handlerScroll)
        }
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