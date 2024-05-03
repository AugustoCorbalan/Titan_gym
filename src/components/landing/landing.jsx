import whatsapp_icon from '../../assets/icons/whatsapp_yellow.svg';
import instagram_icon from '../../assets/icons/instagram_yellow.svg';

export const Landing = ()=>{
    return(
        <div className = 'landing_container'>
            <div className= 'container_title_callToAction'>
                <span>CONOCE TUS LIMITES</span>
                <span>Y DESPUES DESAFIALOS</span>
                <button>EMPEZAR</button>
            </div>
            <div className="contact_containers wpp">
                <a href='https://wa.me/543547579422' target='_blanck'>
                    <img src={whatsapp_icon} alt="icon Whatsapp" />
                </a>
            </div>
            <div className="contact_containers instagram">
                <a href='https://www.instagram.com/titan_espacio_fitness?igsh=MTltdGZnMWE0N3J0dQ==' target='_blanck'>
                    <img src={instagram_icon} alt="icon Instagram" />
                </a>
            </div>
        </div>
    )
}