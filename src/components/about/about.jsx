import about_1 from '../../assets/images/about_1.png';
import about_2 from '../../assets/images/about_2.png';

export const About = ()=>{
    return(
        <div className = "about_container">
             <div className = "container_description">
                <div>
                    <h2>LA COMUNIDAD <br/>TITANES</h2>
                    <p> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <span>Saber más..</span>
             </div>
             <div className = "container_images">
                <img src={about_1} alt="Imagen ilustrativa 1" />
                <img src={about_2} alt="Imagen ilustrativa 2" />
             </div>
        </div>
    )
}