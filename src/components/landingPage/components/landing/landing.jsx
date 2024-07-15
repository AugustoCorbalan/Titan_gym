import whatsapp_icon from '../../../../assets/icons/whatsapp_yellow.svg';
import instagram_icon from '../../../../assets/icons/instagram_yellow.svg';

export const Landing = ()=>{
    return(
        <section id='landing_section'>
            <div className = 'landing_container'>
                <div className= 'container_title_callToAction'>
                    <div className='container_title'>
                        <span>CONOCE TUS LIMITES</span>
                        <span>Y DESPUES DESAFIALOS</span>
                    </div>
                    <div className="contacts_icons">
                        <a href='https://wa.me/543547579422' target='_blanck'>
                            <img src={whatsapp_icon} alt="icon Whatsapp" />
                        </a>
                        <a href='https://www.instagram.com/titan_espacio_fitness?igsh=MTltdGZnMWE0N3J0dQ==' target='_blanck'>
                            <img src={instagram_icon} alt="icon Instagram" />
                        </a>
                    </div>
                    <a className= "callToAction" href='https://wa.me/543547579422' target='_blanck'>
                            CONSULTAR
                    </a>
                </div>
            </div>
        </section>
    )
}