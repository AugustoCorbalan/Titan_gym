export const Personalizado = ()=>{
    return(
        <div id="personalizado_card" className="container_card_inner">
            <div id="personalizado_front" className="front-end">
                <span>ENTRENAMIENTO <br/> PERSONALIZADO</span>
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
                        <button>MAS INFO</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}