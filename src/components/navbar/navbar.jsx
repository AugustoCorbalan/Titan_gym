import primaryLogo from '../../assets/logos/primaryLogo.svg';
import user_circle from '../../assets/icons/user_circle.svg';
import dots_vertical from '../../assets/icons/dots_vertical.svg'; 
import { useState, useEffect } from 'react';

export const Navbar = ()=>{

    const [visibilityPosterStore, setVisibilityPosterStore] = useState(false);
    const [visibilityPosterLogin, setVisibilityPosterLogin] = useState(false);
    const [visibilityDropdownMenu, setVisibilityDropdownMenu] = useState(false);

    const handlerVisibilityPosterStore = ()=>{
        setVisibilityPosterStore(!visibilityPosterStore);
        setTimeout(()=>{setVisibilityPosterStore(false)}, 3000)
    }
    const handlerVisibilityPosterLogin = ()=>{
        setVisibilityPosterLogin(!visibilityPosterLogin);
        setTimeout(()=>{setVisibilityPosterLogin(false)}, 3500)
    }

    const handlerVisibilityMenu = ()=>{
        setVisibilityDropdownMenu(!visibilityDropdownMenu);
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

    useEffect(()=>{
        const body = document.querySelector("body");
        const handlerClick = (event)=>{
            const container_buttons = document.querySelector(".container_buttons_mobile");
            if (!container_buttons.contains(event.target)){
                setVisibilityDropdownMenu(false);
            }
        }
        body.addEventListener("touchstart", handlerClick);
        return ()=>{
            body.removeEventListener("touchstart", handlerClick);
        }
    },[])


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
            <div className='container_buttons_mobile'>
                <button onClick={handlerVisibilityMenu}>
                    <img src={dots_vertical} alt="icono del botton de opciones"/>
                </button>
                <div className={visibilityDropdownMenu? 'dropdown_menu' : 'dropdown_menu_none'}>
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