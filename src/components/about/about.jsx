import about_1 from '../../assets/images/about_1.png';
import about_2 from '../../assets/images/about_2.png';

export const About = ()=>{
    return(
        <div className = "about_container">
             <div className = "container_description">
                <div>
                    <h2>LA COMUNIDAD <br/>TITANES</h2>
                    <p> 
                        La comunidad de TITANES esta formada por varios grupos mixtos de compañeros que se reúnen regularmente, para entrenar juntos.  💪🏼🏋🏻‍♂🏋🏻‍♀<br/>
                        Son animados y sociables, comparten risas, bromas, conversaciones y experiencias personales mientras entrenan!<br/>
                        Debes en cuando compiten entre ellos! 💪🏼😏<br/>
                        Son una pequeña comunidad dentro del gimnasio, donde el compañerismo y el apoyo mutuo son importantes! 👍🏼🫂<br/>
                        Y.. pasar tiempo juntos, dentro y fuera del ambiente de entrenamiento, también está bueno! <br/>
                    </p>
                </div>
             </div>
             <div className = "container_images">
                <img src={about_1} alt="Imagen ilustrativa 1" />
                <img src={about_2} alt="Imagen ilustrativa 2" />
             </div>
        </div>
    )
}