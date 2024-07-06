import touchIcon from '../../../assets/icons/touchScreen.svg';
import pointerHover from '../../../assets/icons/pointerHover.svg';
export const Boxeo = ({animation})=>{
    return(
        <>
            <div id="boxeo_card" className={animation? "container_card_inner container_card_animation_X" : "container_card_inner" }>
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