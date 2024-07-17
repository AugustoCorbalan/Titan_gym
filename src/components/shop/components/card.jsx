import { useState } from "react";

export const Card = ({product})=>{
    const {name, image, characteristics} = product;
    const {price, fabric, gender, age, sizes} = characteristics;
    const [sizeSelected, setSizeSelected] = useState('');
    return(
        <div className="container_card">
            <h2 className="title_mobile">{name}</h2>
            <div className="container_image">
                <img src={image} alt="Imagen del producto" />
            </div>
            <div className="container_data">
                <h2 className="title_desktop">{name}</h2>
                <div className='container_description'>
                    <div className='column1'>
                        <h3>Caracteristicas:</h3>
                        <span>PRECIO: {price}</span>
                        <span>TIPO DE TELA: {fabric} </span>
                        <span>GENERO: {gender}</span>
                        <span>EDAD: {age}</span>
                    </div>
                    <div className='column2'>
                            {
                                sizes == 'Unico' ?
                                <></> :
                                <div>
                                    <h3>Seleccionar talle</h3>
                                    <div className='container_size_buttons'>
                                        {sizes.map((size)=>{
                                            return(
                                                <button 
                                                    id={size} 
                                                    className={(sizeSelected == size)? 'button_selected' : ''}
                                                    onClick={()=>setSizeSelected(size)}
                                                >
                                                    {size}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        <button className="callToAction">Comprar</button>
                    </div>
                </div>
                <span className="information_message">Tiene una demora de 15 días. Al comprar se abona únicamente el 50% del precio publicado para la seña.</span>
            </div>
        </div>
    )
}