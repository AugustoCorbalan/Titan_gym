export const Services = ()=>{
    return(
        <div className="services_container">
            <h2>¿Que ofrecemos? </h2>
            <div className="container_cards">
                <div className="container_card_horizontal">
                    <div className="container_card_inner">
                        <div id="personalizado_front" className="front-end">
                            <span>ENTRENAMIENTO <br/> PERSONALIZADO</span>
                        </div>
                        <div className="back-end">
                            <span>BACK  </span>
                        </div>
                    </div>
                </div>
                <div className="container_card_vertical">
                    <div className="container_card_inner">
                        <div id="total_body_front" className="front-end">
                            <span>TOTAL BODY</span>
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
                </div>
                <div className="container_card_horizontal">
                    <div className="container_card_inner">
                        <div id="boxeo_front" className="front-end">
                            <span>BOXEO</span>
                        </div>
                        <div className="back-end">
                            <span>BACK  </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}