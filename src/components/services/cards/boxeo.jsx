export const Boxeo = ({animation})=>{
    return(
        <>
            <div id="boxeo_card" className={animation? "container_card_inner container_card_animation_X" : "container_card_inner" }>
                <div className="front-end">
                    <span>BOXEO</span>
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
                            <button>MAS INFO</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}