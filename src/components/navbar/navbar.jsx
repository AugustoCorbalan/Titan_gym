import primaryLogo from '../../assets/logos/primaryLogo.svg';
import user_circle from '../../assets/icons/user_circle.svg';
import dots_vertical from '../../assets/icons/dots_vertical.svg'; 

export const Navbar = ()=>{
    const setScrollTop0 = ()=>{
        window.scrollTo(0,0);
    }
    return(
        <div className='navbar_container'>
            <a className='container_logo' onClick={setScrollTop0}>
                <img src={primaryLogo} alt="Logotipo de marca"/>
            </a>
            <div className='container_a'>
                <a href='#about_section'>¿Quienes Somos?</a>
                <a href='#trainings_section'>Entrenamientos</a>
                <a href='#hours_section'>Horarios</a>
                <a>Tienda</a>
            </div>
            <div className='container_a_mobile'>
                <button>
                    <img src={dots_vertical} alt="icono del botton de opciones" />
                </button>
            </div>
            <div className='container_icons'>
                <img src={user_circle} alt="Icono del perfil del usuario"/>
            </div>
        </div>
    )
}