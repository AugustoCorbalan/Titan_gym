import primaryLogo from '../../assets/logos/primaryLogo.svg';
import user_circle from '../../assets/icons/user_circle.svg';
import dots_vertical from '../../assets/icons/dots_vertical.svg'; 
import { useState, useEffect } from 'react';

export const Navbar = ()=>{

    const [visibilityPosterLogin, setVisibilityPosterLogin] = useState(false);
    const [visibilityDropdownMenu, setVisibilityDropdownMenu] = useState(false);

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
        window.scrollTo(0, sectionTop + scrollWindow);
        setVisibilityDropdownMenu(false);
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
        <header className="App-header">  
            <div className='navbar_container'>
                <a href='/' className='button_scroll container_logo' onClick={setScrollTop0}>
                    <img src={primaryLogo} alt="Logotipo de marca"/>
                </a>
                <div className='container_buttons'>
                    <button className='button_scroll' onClick={()=>scroll('about_section')}>¿Quienes Somos?</button>
                    <button className='button_scroll' onClick={()=>scroll('trainings_section')}>Entrenamientos</button>
                    <button className='button_scroll' onClick={()=>scroll('hours_section')}>Horarios</button>
                    <a href='/tiendaTitan' className='button_scroll'>
                        Tienda
                    </a>
                </div>
                <div className='container_buttons_mobile'>
                    <a href='/' onClick={handlerVisibilityMenu}>
                        <img src={dots_vertical} alt="icono del botton de opciones"/>
                    </a>
                    <div className={visibilityDropdownMenu? 'dropdown_menu' : 'dropdown_menu_none'}>
                        <button className='button_scroll' onClick={()=>scroll('about_section')}>¿Quienes Somos?</button>
                        <button className='button_scroll' onClick={()=>scroll('trainings_section')}>Entrenamientos</button>
                        <button className='button_scroll' onClick={()=>scroll('hours_section')}>Horarios</button>
                        <a href='/tiendaTitan' className='button_scroll'>
                            Tienda
                        </a>
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
        </header>
    )
}