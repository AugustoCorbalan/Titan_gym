import logo_titan_black from '../../../../assets/logos/logo_titan_black.svg' ;
import instagram_icon from '../../../../assets/icons/instagram_black.svg';
import map_pin_icon from '../../../../assets/icons/map_pin.svg';
import whatsapp_icon from '../../../../assets/icons/whatsapp_black.svg';
export const Footer = ()=>{
    return(
        <div className="footer_container">
            <div className="callToAction">
                <span>¡LO MAS DIFICIL ES EMPEZAR!</span>
                <a href='https://wa.me/543547579422' target='_blanck'>Empezar</a>
            </div>
            <footer>
                <div className="container_1">
                    <a href='https://wa.me/543547579422' target='_blanck'>
                        <img src={whatsapp_icon} alt="icon Whatsapp" />
                        <span>3547-579422</span>
                    </a>
                    <a href='https://www.instagram.com/titan_espacio_fitness?igsh=MTltdGZnMWE0N3J0dQ==' target='_blanck'>
                        <img src={instagram_icon} alt="icon Instagram" />
                        <span>titan_espacio_fitness</span>
                    </a>
                    <a>
                        <img src={map_pin_icon} alt="icon Map" />
                        <span>Prudencio Bustos 257 - AG</span>
                    </a>
                </div>
                <div className="container_2">
                    <img src={logo_titan_black} alt="Logo gimnasio Titan" />
                </div>
                <div className="container_3">
                    <div>
                        <a>| ¿Quienes Somos?</a>
                        <a>| Entrenamientos</a>
                        <a>| Tienda</a>
                    </div>
                </div>
            </footer>
            <div className="copyrigth">
                <span>© 2024 designed and produced by TecnoComputer - Augusto Corbalán</span>
            </div>
        </div>
    )
}