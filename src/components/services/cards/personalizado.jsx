import touchIcon from '../../../assets/icons/touchScreen.svg';
import pointerHover from '../../../assets/icons/pointerHover.svg';


export const Personalizado = ({animation})=>{
    return(
        <div id="personalizado_card" className={animation? "container_card_inner container_card_animation_X" : "container_card_inner"}>
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