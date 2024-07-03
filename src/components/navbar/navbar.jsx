import primaryLogo from '../../assets/logos/primaryLogo.svg';
import user_circle from '../../assets/icons/user_circle.svg';
import dots_vertical from '../../assets/icons/dots_vertical.svg'; 
import { useState } from 'react';

export const Navbar = ()=>{

    const [visibilityPosterStore, setVisibilityPosterStore] = useState(false);
    const [visibilityPosterLogin, setVisibilityPosterLogin] = useState(false);

    const handlerVisibilityPosterStore = ()=>{
        setVisibilityPosterStore(!visibilityPosterStore);
        setTimeout(()=>{setVisibilityPosterStore(false)}, 3000)
    }
    const handlerVisibilityPosterLogin = ()=>{
        setVisibilityPosterLogin(!visibilityPosterLogin);
        setTimeout(()=>{setVisibilityPosterLogin(false)}, 3500)
    }

    const setScrollTop0 = ()=>{
        window.scrollTo(0,0);
    }
    const scroll = (section)=>{
        const sectionElement = document.getElementById(section);
        const sectionTop = sectionElement.getBoundingClientRect().top;
        const scrollWindow = window.scrollY;
        console.log(sectionTop);
        window.scrollTo(0, sectionTop + scrollWindow);
    }
    return(
        <div className='navbar_container'>
            <button className='button_scroll container_logo' onClick={setScrollTop0}>
                <img src={primaryLogo} alt="Logotipo de marca"/>
            </button>
            <div className='container_buttons'>
                <button className='button_scroll' onClick={()=>scroll('about_section')}>¿Quienes Somos?</button>
                <button className='button_scroll' onClick={()=>scroll('trainings_section')}>Entrenamientos</button>
                <button className='button_scroll' onClick={()=>scroll('hours_section')}>Horarios</button>
                <button className='button_scroll' onClick={handlerVisibilityPosterStore}>
                    Tienda
                </button>
                <div className={visibilityPosterStore? 'upcoming_poster' : 'upcoming_poster_none'}>
                    <span>¡Proximamente podrás adquirir todos los productos de <p>TITAN </p> directamente desde acá!</span>
                </div>
            </div>
            <div className='container_a_mobile'>
                <button>
                    <img src={dots_vertical} alt="icono del botton de opciones" />
                </button>
            </div>
            <div className='container_icons'>
                <button onClick={handlerVisibilityPosterLogin}>
                    <img src={user_circle} alt="Icono del perfil del usuario"/>
                </button>
            </div>
            <div className={visibilityPosterLogin? 'upcoming_poster upcoming_poster_login' : 'upcoming_poster_none'}>
                <span>¡Proximamente podrás iniciar sesión y tener un seguimiento de tus compras y progresos!</span>
            </div>
        </div>
    )
}