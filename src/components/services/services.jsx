import {Boxeo} from './cards/boxeo.jsx';
import { TotalBody } from './cards/totalBody.jsx';
import { Personalizado } from './cards/personalizado.jsx';
export const Services = ()=>{
    return(
        <section id='trainings_section'>
            <div className='services_container'>
                <div className="services_container_desktop">
                    <h2>¿Que ofrecemos? </h2>
                    <div className="container_cards">
                        <div className="container_card_horizontal">
                            <Personalizado/>
                        </div>
                        <div className="container_card_vertical">
                            <TotalBody/>
                        </div>
                        <div className="container_card_horizontal">
                            <Boxeo/>
                        </div>
                    </div>
                </div>
                <div className="services_container_mobile">
                    <div className='container_cards'>
                        <div className='column1'>
                            <div className="container_card_horizontal">
                                <Personalizado/>
                            </div>
                            <div className="container_card_horizontal">
                                <Boxeo/>
                            </div>
                        </div>
                        <div className='column2'>
                            <div className='container_title'>
                                <h2>¿Que <br/>ofrecemos? </h2>
                            </div>
                            <div className="container_card_vertical">
                                <TotalBody/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}