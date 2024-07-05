import touchIcon from '../../../assets/icons/touchScreen.svg';
import pointerHover from '../../../assets/icons/pointerHover.svg';

export const TotalBody = ({animation})=>{
    return(
        <div id="total_body_card" className={animation? "container_card_inner container_card_animation_Y" : "container_card_inner"}>
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
                        <button>MAS INFO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}