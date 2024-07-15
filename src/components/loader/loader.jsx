import logo_titan_white from '../../assets/logos/logo_titan_white.svg';
export const Loader = ()=>{
    
    return(
        <div className='loader_container' >
            <div className='spinner'>

            </div>
            <img src={logo_titan_white} alt="Logo del gimnasio Titan" />
            <div className='footer'>
                <span>© 2024 designed and produced by TecnoComputer - Augusto Corbalán</span>
            </div>
        </div>
    )
}