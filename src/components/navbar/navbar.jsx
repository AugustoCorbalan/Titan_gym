import primaryLogo from '../../assets/logos/primaryLogo.svg';
import user_circle from '../../assets/icons/user_circle.svg';
import dots_vertical from '../../assets/icons/dots_vertical.svg'; 

export const Navbar = ()=>{
    return(
        <div className='navbar_container'>
            <div className='container_logo'>
                <img src={primaryLogo} alt="Logotipo de marca"/>
            </div>
            <div className='container_a'>
                <a>¿Quienes Somos?</a>
                <a>Tienda</a>
                <a>Entrenamientos</a>
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